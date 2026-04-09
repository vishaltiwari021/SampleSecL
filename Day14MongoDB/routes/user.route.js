const express = require('express');

const userController = require('../controller/user.controller.js');

const router = express.Router();

router.get('/users',userController.getUsers),
router.get('/users/:_id',userController.getUserId),

module.exports = router;