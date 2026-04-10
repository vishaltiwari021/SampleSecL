const User = require('../models/user.model.js');
// patch-check

exports.getUsers = async (req,res) =>{
    const users = await User.find({});
    res.json(users);
}
exports.getUserId = async(req,res)=>{
    const {name} = req.params;
    const user = await User.find({name:name});
    res.json(user);
}
exports.addUsers = async (req,res)=>{
    try {
        const userMeta = req.body;
        
        if(userMeta?.name){
            const user = await User.findOne({name:userMeta.name});
            if(user){
                return res.status(409).json({error: "User already exists"})
            }
        }
        
        // Create user
        await User.create(userMeta);
        return res.status(201).json({message: "User is created"})
        
    } catch(err) {
        // Mongoose validation error
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(e => e.message);
            return res.status(400).json({error: messages.join(', ')})
        }
        
       
    }
}
