const express = require('express');
const app = express();
const userRoutes = require('./routes/useRoutes')

app.use(express.json());

app.use('/',userRoutes);


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/student/:userId',(req,res)=>{
    const data =  req.params.userId;
    res.json({message:"hello",data:data})
    
})

module.exports = app;