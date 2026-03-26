//today we learn about JWT..

import express from "express"
import authRoutes  from "./routes/authroute.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtToken = process.env.jwtToken;


const app = express();

const authMiddelware = (req,res,next) =>{
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        res.send("Token is not avilabel")
    }
    try {
        const decoder = jwt.verify(token,jwtToken);
        console.log("authmiddleware decoder ", decoder);
        next();
    } catch (error) {
        res.send("token not valid");
    }
}


app.use(authMiddelware);
app.use('/',authRoutes);



app.listen(4000,()=>{
    console.log(`server is running on port :`+ 4000);
    
})