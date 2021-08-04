const Cliente = require('../models/Cliente');

module.exports.create = function(req, res){
    console.log(req.body,
        'AQUI CARALHO DESGRAÇA');
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
}
module.exports.show = function(req, res){
    Cliente.find()
      .then(cliente => {
        res.json(cliente);
      })
      .catch(error => res.status(500).json(error));
};