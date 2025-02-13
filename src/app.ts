import express, {Request, Response, Router} from 'express';
import { configDotenv, DotenvConfigOptions } from 'dotenv';
import router from './routes/Routes';
import { promisePool } from './DB';
import cors from 'cors';
import bodyParser from 'body-parser';
const path = require('path');
const app = express();
const port = 3000;

//para dados de formulario em formato (POST)
app.use(bodyParser.urlencoded({extended: true})); 

app.set('views', path.resolve(__dirname,'..', 'views'));
app.set('view engine', 'ejs')

app.use(express.json());
app.use(cors());
app.use(express.static('public'));


promisePool.getConnection()
.then(() => console.log('Conectado ao MySQL'))
.catch((error) => {console.error('Erro ao conectar ao MySQL', error)
    process.exit(1);
});

app.use('/api/usuarios', router);

// Rota para o formulário
app.get('/formulario', (req: Request, res: Response) => {
    console.log('Acessando a rota do formulário');
    res.render('formulario'); 
  });
  



app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});