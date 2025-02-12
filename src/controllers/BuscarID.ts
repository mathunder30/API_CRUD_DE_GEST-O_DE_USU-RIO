import {Request, Response} from 'express';
import Usuarios from '../models/Usuario';

//Recebe o id do usuário através dos parâmetros da URL (req.params), busca o usuário com esse id e o retorna. 
//Se não encontrar, retorna um erro 404.
export const buscandoUsuarioId = async (req: Request, res: Response) => {
    const{ id } = req.params;

    try{
        const usuario = await Usuarios.buscandoUsuarioId(Number(id));
        if (usuario){
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado'});
        }
    } catch (erro){
        res.status(500).json({ message: 'Erro ao buscar usuario', erro})
    }
};