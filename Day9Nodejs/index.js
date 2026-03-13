// we are learning Express from today...
/*
what is backend arch?

client-> req->server->middleware->route handerler->->controller-> response

Set up server in express

MVC:

*/


const app = require('./app.js')
const dotenv = require('dotenv').config();






const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`🔥 server is live on port:${PORT}`);
    
})

