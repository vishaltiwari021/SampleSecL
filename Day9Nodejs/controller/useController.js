const users = require('../module/useModule');


exports.getUsers =(req,res)=>{
    res.json(users)
};

exports.getUsersById =(req,res)=>{
    const userId = req.params.id;
    const name = req.query.name;
    const header = req.headers;

    console.log(userId);
    console.log(name);
    console.log(header);
    
    users.map(userDetail=>{
        
       const id = userDetail['id'];
        if(id == userId){
        res.json(userDetail,name);
        }
    })
    
};
/*
17/03/26:

res.redirect();
res.status();
res.send();
res.json();
*/

exports.addUser = (req,res)=>{
    console.log("user body",req.body);
    res.json(req.body);
}



