import { Request, Response } from "express";
import Usuarios from "../models/Usuario";
//atualiza o usuário com base no id passado nos parâmetros da URL e nos dados fornecidos no corpo da requisição.
export const atualizarUsuario = async (req: Request, res: Response) => {
    const {id} = req.params;
    const { nome, email, senha} = req.body;

    try {
        await Usuarios.atualizarUsuario(Number(id), {nome, email, senha});
        res.status(200).json({ message: 'Usuário atualizado com sucesso'})
    } catch(erro){
        res.status(500).json({ message: 'Erro ao atualizar usuario', erro})
    }
};