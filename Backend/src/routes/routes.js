const { Router } = require('express');
const router = Router()
const bodyParser = require('body-parser')
const clienteController = require('../controller/clienteController');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/show', urlencodedParser, clienteController.show);
router.post('/create', jsonParser, clienteController.create);

module.exports = router;