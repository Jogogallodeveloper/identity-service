const { Router } = require('express');
const PersonController = require('./controllers/Person-Controller.js');

const router = Router();

router.get('/persons', PersonController.get)