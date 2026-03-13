const express = require('express');
const routes = express.Router();

const userController = require('../controller/useController')

routes.get('/users',userController.getUsers)
routes.get('/users/:id',userController.getUsersById)
routes.post('/users/adduser',userController.addUser);

module.exports = routes;