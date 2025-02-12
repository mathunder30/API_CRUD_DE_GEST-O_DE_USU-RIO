import { Request, Response } from 'express';
import Usuarios from '../models/Usuario';

// aqui a função chama o metodo buscandoTodosUsuarios do Usuarios e retorna a lista de usuarios
export const buscandoTodosUsuarios = async (req: Request, res: Response) => {

    try{
        const Usuario = await Usuarios.buscandoTodosUsuarios();
        res.json(Usuario);
    } catch (erro) {
        res.status(500).json({ message: 'Erro ao buscar usuario', erro});
    }
};