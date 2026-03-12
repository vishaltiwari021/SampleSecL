// we are learning Express from today...
/*
what is backend arch?

client-> req->server->middleware->route handerler->->controller-> response

Set up server in express

MVC:

*/

const express = require('express');
const app = express();
const userRoutes = require('./routes/useRoutes')

app.use('/',userRoutes)

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/student/:userId',(req,res)=>{
    const data =  req.params.userId;
    res.json({message:"hello",data:data})
    
})


app.listen(8000,()=>{
    console.log(`🔥 server is live on port 8000`);
    
})