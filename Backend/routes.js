const express = require('express');
const router = express.Router();

const Cliente = require('./models/Cliente');

router.get('/show', (req, res) => {
    Cliente.find()
      .then(clientes => {
        res.json(clientes);
      })
      .catch(error => res.status(500).json(error));
  });
router.post('/create', (req, res) => {
    const novoCliente = new Cliente({
        nome: req.body.nome,
        email: req.body.email,
        valor: req.body.valor
    });

    novoCliente.save()
    .then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    })
})

module.exports = router;