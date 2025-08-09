const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello world!!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente!');
});

app.get('/formulario', (req, res) => {
    res.send(`<form action="/formulario" method="POST">
        Nome: <input type='text' name='nome'></input>
        <button>Enviar</button>
    </form>`);
})

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params);
    res.send('Olá mundo');
})

app.post('/formulario', (req, res) => {
    console.log(req.body);
    res.send('Recebi o formulário');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log("Servidor executando na porta 3000");
});



