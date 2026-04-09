const User = require('../models/user.model.js');

exports.getUsers = async (req,res) =>{
    const users = await User.find({});
    res.json(users);
}
exports.getUserId = async(req,res)=>{
    const {name} = req.params;
    return await User.find({name:name});
}