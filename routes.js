const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const formController = require('./src/controllers/formController');
const contactController = require('./src/controllers/contactController');

route.get('/', homeController.homePage);
route.get('/formulario', formController.formPage);
route.post('/formulario', formController.requirePost);
route.get('/contato', contactController.contactPage);

module.exports = route;