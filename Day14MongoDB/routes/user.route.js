const express = require('express');
const validate = require('../middleware/validation.js')
const schemaValidation = require("../models/joi.js")
const userController = require('../controller/user.controller.js');

const router = express.Router();

router.get('/users',userController.getUsers),
router.get('/users/:name',userController.getUserId),
router.post('/users',userController.addUsers),
router.post('/shorten', userController.createShortUrl),
router.get('/s/:shortId', userController.redirectShortUrl),
router.post('/createUser',validate(schemaValidation),(req,res)=>{
    res.json({
        success:true,
        data: req.body,
    })
})
module.exports = router;