import Express from "express";
import { criandoUsario, buscandoTodosUsuarios, buscandoUsuarioId, atualizarUsuario, deletarUsuario } from "../controllers/UsuarioController";
import { paginaFormulario } from "../controllers/FormularioControllers";
const router = Express.Router();

router.post('/criar', criandoUsario); // Rota de criação de usuario
router.get('/buscar', buscandoTodosUsuarios); // Rota de listar todos os usuarios 
router.get('/:id', buscandoUsuarioId); //rota para buscando usuarios por ID
router.post('/atualizar', atualizarUsuario); // rota para Atualizar usuarios
router.post('/deletar', deletarUsuario); //rota para deletar usuario

router.get('/formulario', paginaFormulario);


export default router;