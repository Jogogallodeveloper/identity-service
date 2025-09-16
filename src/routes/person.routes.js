const { Router } = require('express');
const personController = require('../controllers/Person.controller.js'); // já é a instância

const router = Router();

router.get('/persons', (req, res) => personController.getAll(req, res));

module.exports = router;
