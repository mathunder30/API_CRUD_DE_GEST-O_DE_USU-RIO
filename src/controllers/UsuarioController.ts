import { Request, Response } from "express";
import Usuarios from "../models/Usuario";

//Criei um controle para Criar o usuario. a função criandoUsario recebe os dados do usuario via req.body,
// ela chama o método criarUsuario da classe Usuarios do arquivo Usuario.ts.
export const criandoUsario = async(req: Request, res: Response) => {
    const {nome, email, senha} = req.body;
    console.log('Dados recebidos:', { nome, email, senha });

    try{

        const NovoUsuario = await Usuarios.criandoUsuario({nome, email, senha});
        res.status(201).json({ message: 'Usuario criado com sucesso!', usuario: NovoUsuario}); // Ela retorna o usuario criado no corpo da resposta

    } catch (error){
        res.status(500).json({message: 'Erro ao criar usuario', error});

    }

};

// aqui a função chama o metodo buscandoTodosUsuarios do Usuarios e retorna a lista de usuarios
export const buscandoTodosUsuarios = async (req: Request, res: Response) => {

    try{
        const Usuario = await Usuarios.buscandoTodosUsuarios();
        res.json(Usuario);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuario', error});
    }
};

//Recebe o id do usuário através dos parâmetros da URL (req.params), busca o usuário com esse id e o retorna. 
//Se não encontrar, retorna um erro 404.
export const buscandoUsuarioId = async (req: Request, res: Response) => {
    const{ id } = req.query;

    try{
        const usuario = await Usuarios.buscandoUsuarioId(Number(id));
        if (usuario){
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado'});
        }
    } catch (error){
        res.status(500).json({ message: 'Erro ao buscar usuario', error})
    }
};

//atualiza o usuário com base no id passado nos parâmetros da URL e nos dados fornecidos no corpo da requisição.
export const atualizarUsuario = async (req: Request, res: Response) => {
    const {id} = req.query;
    const { nome, email, senha} = req.body;

    try {
        await Usuarios.atualizarUsuario(Number(id), {nome, email, senha});
        res.status(200).json({ message: 'Usuário atualizado com sucesso'})
    } catch(error){
        res.status(500).json({ message: 'Erro ao atualizar usuario', error})
    }
};

// ESSA FUNÇÃO UTILIZA O METODO QUE EXCLUI O USUARIO COM BASE NO ID
export const deletarUsuario = async (req: Request, res: Response) => {
    const {id} = req.body;

    try {
         await Usuarios.deletarUsuario(Number(id));
        res.status(200).json({ message: 'Usuario excluido com sucesso'});
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir usuario', error})
    }
}