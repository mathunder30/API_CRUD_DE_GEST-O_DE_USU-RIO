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
exports.criandoUsario = void 0;
const Usuario_1 = __importDefault(require("../models/Usuario"));
//Criei um controle para Criar o usuario. a função criandoUsario recebe os dados do usuario via req.body,
// ela chama o método criarUsuario da classe Usuarios do arquivo Usuario.ts.
const criandoUsario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, senha } = req.body;
    try {
        const NovoUsuario = yield Usuario_1.default.criandoUsuario({ nome, email, senha });
        res.status(201).json(NovoUsuario); // Ela retorna o usuario criado no corpo da resposta
    }
    catch (erro) {
        res.status(500).json({ message: 'Erro ao criar usuario', erro });
    }
});
exports.criandoUsario = criandoUsario;
