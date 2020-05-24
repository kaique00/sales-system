const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection')

const routes = express.Router();
const userController = require('./controllers/userController')
const saleController = require('./controllers/saleController')
const itenssaleController = require('./controllers/itenssaleController')
const productController = require('./controllers/productController')
const sessionController = require('./controllers/sessionController')

routes.post('/session', sessionController.create)

routes.post('/user', userController.create);
routes.get('/user/list/:id', userController.listId);
routes.get('/users', userController.index);
routes.delete('/user/:id', userController.delete);

routes.get('/sales', saleController.index);
routes.post('/sale/create', saleController.create);
routes.delete('/sale/delete/:id', saleController.delete);
routes.get('/sale/update/', saleController.update);

routes.get('/itenssale', itenssaleController.index);
routes.post('/itenssale/create', itenssaleController.create);
routes.delete('/itenssale/:id', itenssaleController.delete);
//routes.get('/itenssale/list/:id', itenssaleController.listId);

routes.get('/products', productController.index);
routes.post('/product/create', productController.create);
routes.delete('/product/delete/:id', productController.delete);

module.exports = routes;