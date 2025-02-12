"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DeletarUsuario_1 = require("../controllers/DeletarUsuario");
const CriarController_1 = require("../controllers/CriarController");
const BuscarUsuarios_1 = require("../controllers/BuscarUsuarios");
const BuscarID_1 = require("../controllers/BuscarID");
const AtualizarUsuario_1 = require("../controllers/AtualizarUsuario");
const router = express_1.default.Router();
router.post('/', CriarController_1.criandoUsario); // Rota de criação de usuario
router.get('/', BuscarUsuarios_1.buscandoTodosUsuarios); // Rota de listar todos os usuarios 
router.get('/:id', BuscarID_1.buscandoUsuarioId); //rota para buscando usuarios por ID
router.put('/:id', AtualizarUsuario_1.atualizarUsuario); // rota para Atualizar usuarios
router.delete('/:id', DeletarUsuario_1.deletarUsuario); //rota para deletar usuario
exports.default = router;
