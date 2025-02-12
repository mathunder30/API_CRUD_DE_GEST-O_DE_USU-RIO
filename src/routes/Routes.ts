import Express from "express";
import { criandoUsario, buscandoTodosUsuarios, buscandoUsuarioId, atualizarUsuario, deletarUsuario } from "../controllers/UsuarioController";

const router = Express.Router();

router.post('/', criandoUsario); // Rota de criação de usuario
router.get('/', buscandoTodosUsuarios); // Rota de listar todos os usuarios 
router.get('/:id', buscandoUsuarioId); //rota para buscando usuarios por ID
router.put('/:id', atualizarUsuario); // rota para Atualizar usuarios
router.delete('/:id', deletarUsuario); //rota para deletar usuario

export default router;