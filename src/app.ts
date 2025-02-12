import express, {Request, Response, Router} from 'express';
import { configDotenv, DotenvConfigOptions } from 'dotenv';
import router from './routes/Routes';
import { promisePool } from './DB';
import cors from 'cors';
const app = express();
const port = 3000

app.use(express.json());
app.use(cors());

promisePool.getConnection()
.then(() => console.log('Conectado ao MySQL'))
.catch((error) => console.error('Erro ao conectar ao MySQL', error));

app.use('/api/usuarios', router);

app.get('/', (req: Request, res: Response)=>{
    res.send('API de Gestão de Usuário com typescript e mysql');
}); 

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});