const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ mensagem:'Rota funcionando'});
});

app.listen(3000, () => {
    console.log('Meu servidor está funcionando');
});

