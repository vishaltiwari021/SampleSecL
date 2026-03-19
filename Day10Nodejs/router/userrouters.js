const express = require("express");
const routes = express.Router();
const userController = require('../controller/useController.js');

routes.get('/products',userController.getProducts);

routes.get('/product/:id',userController.getProductsById);

routes.post('/add/products',userController.addProduct);

routes.delete('/products/:id',userController.deleteProduct);

module.exports = routes;
