exports.formPage = (req, res) => {
    res.send(`<form action="/formulario" method="POST">
        Nome: <input type='text' name='nome'></input>
        <button>Enviar</button>
    </form>`);
}

exports.requirePost = (req, res) => {
    res.send('Recebi o formulário');
}