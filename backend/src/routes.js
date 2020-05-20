const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection')

const routes = express.Router();
const userController = require('./controllers/userController')
const accountController = require('./controllers/accountController')
const itensAccountController = require('./controllers/itensAccountController')
const productController = require('./controllers/productController')
const sessionController = require('./controllers/sessionController')

routes.post('/session', sessionController.create)

routes.post('/users', userController.create);
routes.get('/users/listid/:id', userController.listId);
routes.get('/users', userController.index);
routes.delete('/users/:id', userController.delete);

routes.get('/accounts', accountController.index);
routes.post('/accounts', accountController.create);
routes.delete('/accounts/:id', accountController.delete);
routes.get('/account/', accountController.update);

routes.get('/itensaccount', itensAccountController.index);
routes.post('/itensaccount', itensAccountController.create);
routes.delete('/itensaccount/:id', itensAccountController.delete);

routes.get('/products', productController.index);
routes.post('/products', productController.create);
routes.delete('/products/:id', productController.delete);

module.exports = routes;