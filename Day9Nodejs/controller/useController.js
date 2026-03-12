const users = require('../module/useModule');


exports.getUsers =(req,res)=>{
    res.json(users)
}
exports.getUsersById =(req,res)=>{
    const userId = req.params.id;
    users.map(userDetail=>{
        console.log(userDetail);
        
       const id = userDetail['id'];
        if(id == userId){
        res.json(userDetail);
        }
    })
}


