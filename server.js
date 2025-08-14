// Importando o .env
require('dotenv').config();

const express = require('express');
const app = express();

// Importando o mongoose e coletando a promise junto com o .env
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch((e) => console.log(e));
const routes = require('./routes');
const path = require('path');

// Importando sessions
const session = require('express-session');
// Importando o connect-mongo
const MongoStore = require('connect-mongo');
// Importando as flash messages
const flash = require('connect-flash');

//Importando meu middleware
const { middlewareGlobal } = require('./src/middlewares/middleware');

// Configuração de encoded
app.use(express.urlencoded({ extended: true }))

// Criação dos arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Configuração das sessions
const sessionOptions = ({
    secret: 'mvpqmwpoqjriobdoiqkpwkropqjtqpwmfpq',
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING,
        collectionName: 'sessions'
    }),
    resave: false,
    saveUnitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(session(sessionOptions));
app.use(flash());

// Criação da views e definição da engine
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Criação e utilização de middlewares
app.use(middlewareGlobal);
app.use(routes);

// Aguardando a conexão na base de dados, pra depois ouvir no servidor // Esperando a promise
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log("Servidor executando na porta 3000");
    });
});



