const products = require('../model/useModel.js');


exports.getProducts =(req,res)=>{
    res.json(products)
};

exports.getProductsById =(req,res)=>{
    const userId = req.params.id
     products.map(productDetail=>{
        
       const id = productDetail['id'];
        if(id == userId){
        res.json(productDetail);
        }
    })
};

exports.cartProduct = (req,res)=>{
    console.log("user body",req.body);
    res.json(req.body);
}

exports.deleteProduct =(req,res)=>{
    const {id} = req.params.id;

}