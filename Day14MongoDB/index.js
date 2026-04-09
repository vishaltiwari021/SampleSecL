const express = require('express');
const ConnectDB = require('./models/db.js');
const router =  require('./routes/user.route.js');
const app = express();

const PORT = 8000;

app.use('/',router);

ConnectDB();

app.listen(PORT,()=>{
    console.log('server is running on the port',PORT);
})