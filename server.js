import express from 'express';
import publicRouter from './routes/public.js'
import privateRouter from './routes/private.js'
import auth from './middlewares/auth.js';

const app = express();
app.use(express.json()) 

app.use('/' , publicRouter)
app.use('/', auth , privateRouter)

/*

3 rotas

Publicas
    Criar Usuarios, Login


Privadas
    Listar Users


*/ 


app.listen(3000, () => console.log('Servidor Rodando'))