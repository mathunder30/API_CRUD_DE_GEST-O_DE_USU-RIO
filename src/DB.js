"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisePool = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
// Conexão com o banco de dados Mysql Workbench
const pool = mysql2_1.default.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'aluno',
    database: 'api_crud',
});
const promisePool = pool.promise();
exports.promisePool = promisePool;
