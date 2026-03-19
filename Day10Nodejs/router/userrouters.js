const express = require("express");
const router = express.Router();
const userController = require('../controller/useController.js');


router.
route('/product')
.get(userController.getProducts);


router.get('/product/:id',userController.getProductsById);
router.get('/product/cart/:id/',userController.cartProduct);



module.exports = router;
