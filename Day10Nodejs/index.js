const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./router/userrouters.js");

dotenv.config();

const app = express();
app.use(express.json())
app.use('/get',userRoutes);

const PORT = process.env.PORT;



app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
    
})
