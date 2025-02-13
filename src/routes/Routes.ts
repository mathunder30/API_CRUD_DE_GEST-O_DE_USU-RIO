import Express from "express";
import { criandoUsario, buscandoTodosUsuarios, buscandoUsuarioId, atualizarUsuario, deletarUsuario } from "../controllers/UsuarioController";
import { paginaPrincipal } from "../controllers/FormularioControllers";
const router = Express.Router();

router.post('/api/usuarios', criandoUsario); // Rota de criação de usuario
router.get('/', buscandoTodosUsuarios); // Rota de listar todos os usuarios 
router.get('/:id', buscandoUsuarioId); //rota para buscando usuarios por ID
router.put('/:id', atualizarUsuario); // rota para Atualizar usuarios
router.delete('/:id', deletarUsuario); //rota para deletar usuario

router.get('/', paginaPrincipal);


export default router;