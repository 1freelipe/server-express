const express = require('express');
const route = express.Router();
const homeController= require('./src/controllers/homeController');
const { formPage, requirePost } = require('./src/controllers/formController');
const contactController = require('./src/controllers/contactController');

route.get('/', homeController.homePage);
route.get('/formulario', formPage);
route.post('/formulario', requirePost);
route.get('/contato', contactController.contactPage);

module.exports = route;