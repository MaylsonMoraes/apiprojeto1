const express = require('express');
const router = express.Router();

//todos os registros
router.get('/', (req, res) => {
    res.json({ mensagem:'Pegar todos os registros'});
});

//um registro com id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Pegar somente o registro com o id: ${id}`});
});

//criar registro
router.post('/', (req, res) => {
    const body = req.body;
    res.json({mensagem: 'Criar usuário'});
});

//atualizar somente o registro com o id
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Atualizar somente o registro com o id: ${id}`});
});

//Deletar somente o registro com id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Deletar somente o registro com o id: ${id}`});
});

module.exports = router;