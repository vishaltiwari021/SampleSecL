const express = require("express");
const userRoutes = require("./router/userrouters.js");


const app = express();
app.use(express.json())
app.use('/get',userRoutes);

module.exports = app;