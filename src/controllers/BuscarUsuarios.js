"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscandoTodosUsuarios = void 0;
const Usuario_1 = __importDefault(require("../models/Usuario"));
// aqui a função chama o metodo buscandoTodosUsuarios do Usuarios e retorna a lista de usuarios
const buscandoTodosUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Usuario = yield Usuario_1.default.buscandoTodosUsuarios();
        res.json(Usuario);
    }
    catch (erro) {
        res.status(500).json({ message: 'Erro ao buscar usuario', erro });
    }
});
exports.buscandoTodosUsuarios = buscandoTodosUsuarios;
