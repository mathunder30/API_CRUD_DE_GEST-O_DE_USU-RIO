import { Request, Response } from "express";
import Usuarios from "../models/Usuario";
// ESSA FUNÇÃO UTILIZA O METODO QUE EXCLUI O USUARIO COM BASE NO ID
export const deletarUsuario = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        await Usuarios.deletarUsuario(Number(id));
        res.status(200).json({ message: 'Usuario excluido com sucesso'});
    } catch (erro) {
        res.status(500).json({ message: 'Erro ao excluir usuario', erro})
    }
}