const express = require('express');

const Client = require('../models/Client.js');

const router = express.Router();

router.post('/create', async(req, res) => {
    try {
        const client =  await Client.create(req.body);

        return res.send({ client }, "Cliente criado");

    }catch (err){
        return res.status(400).send({error: 'Falha ao criar cliente'})
    }
});

router.get('/show', async(req, res) => {
    try {
        const client =  await Client.show(req.body);

        return res.send({ client });

    }catch (err){
        return res.status(400).send({error: 'Falha ao encontrar clientes'})
    }
});

module.exports = app => app.use('/principal', router);