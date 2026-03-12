// we are learning Express from today...
/*
what is backend arch?

client-> req->server->middleware->route handerler->->controller-> response

Set up server in express

MVC:

*/

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(8000,()=>{
    console.log(`🔥 server is live on port 8000`);
    
})