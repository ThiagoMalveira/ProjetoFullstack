const { Router } = require('express');
const router = Router()
const Cliente = require('../models/Cliente');


router.post('/create', (req, res) => {
    const novoCliente = new Cliente({
      nome: req.body.nome,
      email: req.body.email,
      valor: req.body.valor
    });
  
    novoCliente
      .save()
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  router.get('/show', (req, res) => {
    Cliente.find()
      .then(cliente => {
        res.json(cliente);
      })
      .catch(error => res.status(500).json(error));
  });

module.exports = router;