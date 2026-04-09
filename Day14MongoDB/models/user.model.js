const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number
        },
        course:{
            type:String
        },
        skills:{
            type:[String]
        },
        address:{
            type:{
                city:String,
                pincode:Number
            }
        },
        isActive:{
            type:Boolean
        },
        marks:{
            type:[{subject:String,Score:Number}]
        }
});

const User = mongoose.model('User',userSchema);

module.exports = User;

//third portion in model is (custom collections)

//use of Schema: Datatype,defaultValue,required