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
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("../DB");
// Essa classe esta usando métodos estaticos para interagir com a tabela do db
// get = buscando
//aqui onde esta classe vou usar 4 funçoes para CRUD que é 'criandoUsario', 'buscandoTodosUsuarios', 'buscandoUsuarioId' 'atualizandoUsuario' e 'deletandoUsuario';
class Usuarios {
    //nesse metodo estatico, Cria um novo usuário no banco de dados. Ele recebe um objeto user do tipo IUser,
    //executa uma query INSERT para adicionar os dados à tabela users e retorna
    // o usuário com o id gerado automaticamente (insertId).
    static criandoUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield DB_1.promisePool.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [usuario.nome, usuario.email, usuario.senha]
            //o promisePool Executa a query SQL de forma assíncrona
            );
            //caso aconteça algum erro, pode ter a ver com esse return
            return Object.assign(Object.assign({}, usuario), { id: rows.insertId });
        });
    }
    static buscandoTodosUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            // nesse retorna todos os usuários da tabela users.
            // Ele executa a query SELECT * FROM users, que retorna todas as linhas da tabela.
            const [rows] = yield DB_1.promisePool.execute('SELECT * FROM usuario');
            return rows; //A resposta é um array de usuários, que é retornado após o cast para IUser[]
        });
    }
    static buscandoUsuarioId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Busca um usuário pelo id. A query SQL filtra o usuário usando o id passado como parâmetro.
            // Se o usuário for encontrado, ele é retornado; caso contrário, retorna null.
            const [rows] = yield DB_1.promisePool.execute('SELECT * FROM usuario WHERE id = ?', [id]);
            const usuario = rows[0];
            return usuario || null;
        });
    }
    static atualizarUsuario(id, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            // Esse metodo estatico atualiza as informações de um usuário específico com base no seu id.
            //  Ele recebe os novos dados de name, email, e password e os atualiza na tabela users.
            yield DB_1.promisePool.execute('UPTADE usuario SET name = ?, email = ?, password = ? WHERE id = ?', [
                usuario.nome,
                usuario.email,
                usuario.senha,
                id,
            ]);
        });
    }
    static deletarUsuario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Esse metodo estatico exclui um usuário do banco de dados com base no seu id. A query SQL executa o comando DELETE.
            yield DB_1.promisePool.execute('DELETE FROM usuarios WHERE id = ?', [id]);
        });
    }
}
exports.default = Usuarios;
