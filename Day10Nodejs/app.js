const express = require("express");
const userRoutes = require("./router/userrouters.js");
const dotenv = require("dotenv");


dotenv.config();
const app = express();
const JWT = process.env.JWT;

const coustomMiddleware =(req,res,next)=>{
    if(req.query.skip == "true"){
        next();
    }else{
        res.send("Not Authorised");
    }
}
// const authentication = (req,res,next)=>{
//     if(req.headers == JWT){

//     }
// }

app.use(coustomMiddleware);

app.use(express.json())
app.use('/get',userRoutes);

module.exports = app;