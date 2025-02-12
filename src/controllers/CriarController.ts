import { Request, Response } from "express";
import Usuarios from "../models/Usuario";

//Criei um controle para Criar o usuario. a função criandoUsario recebe os dados do usuario via req.body,
// ela chama o método criarUsuario da classe Usuarios do arquivo Usuario.ts.
export const criandoUsario = async(req: Request, res: Response) => {
    const {nome, email, senha} = req.body;

    try{

        const NovoUsuario = await Usuarios.criandoUsuario({nome, email, senha});
        res.status(201).json(NovoUsuario); // Ela retorna o usuario criado no corpo da resposta

    } catch (erro){
        res.status(500).json({message: 'Erro ao criar usuario', erro});

    }

};