"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./routes/Routes"));
const DB_1 = require("./DB");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
DB_1.promisePool.getConnection()
    .then(() => console.log('Conectado ao MySQL'))
    .catch((error) => console.error('Erro ao conectar ao MySQL', error));
app.use('/api/usuarios', Routes_1.default);
app.get('/', (req, res) => {
    res.send('API de Gestão de Usuário com typescript e mysql');
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
