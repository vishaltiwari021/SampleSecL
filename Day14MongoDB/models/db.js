const mongoose = require("mongoose");

const ConnectDB = async() =>{
    await mongoose.connect(`mongodb://127.0.0.1:27017/secL`)
    .then(()=>{
        console.log('Connect to mongodb');
    })
    .catch((error)=>console.log('error',error))
}


module.exports = ConnectDB;