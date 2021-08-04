const { Router } = require('express');
const router = Router()
const clienteController = require('../controller/clienteController');

router.get('/show', clienteController.show);
router.post('/create', clienteController.create);

module.exports = router;