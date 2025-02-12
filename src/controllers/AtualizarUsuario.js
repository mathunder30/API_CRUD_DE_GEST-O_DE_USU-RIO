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
exports.atualizarUsuario = void 0;
const Usuario_1 = __importDefault(require("../models/Usuario"));
//atualiza o usuário com base no id passado nos parâmetros da URL e nos dados fornecidos no corpo da requisição.
const atualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    try {
        yield Usuario_1.default.atualizarUsuario(Number(id), { nome, email, senha });
        res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    }
    catch (erro) {
        res.status(500).json({ message: 'Erro ao atualizar usuario', erro });
    }
});
exports.atualizarUsuario = atualizarUsuario;
