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
exports.deletarUsuario = void 0;
const Usuario_1 = __importDefault(require("../models/Usuario"));
// ESSA FUNÇÃO UTILIZA O METODO QUE EXCLUI O USUARIO COM BASE NO ID
const deletarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield Usuario_1.default.deletarUsuario(Number(id));
        res.status(200).json({ message: 'Usuario excluido com sucesso' });
    }
    catch (erro) {
        res.status(500).json({ message: 'Erro ao excluir usuario', erro });
    }
});
exports.deletarUsuario = deletarUsuario;
