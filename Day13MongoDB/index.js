//today we learn about the MongoDB:
//create, find and operations:

db.users.insertMany([
  {
    "name": "Amit Sharma",
    "age": 22,
    "course": "Computer Science",
    "isActive": true,
    "skills": ["JavaScript", "React", "MongoDB"]
  },
  {
    "name": "Priya Verma",
    "age": 24,
    "course": "Information Technology",
    "isActive": false,
    "skills": ["Python", "Django", "SQL"]
  },
  {
    "name": "Rahul Singh",
    "age": 21,
    "course": "Electronics",
    "isActive": true,
    "skills": ["C++", "Embedded Systems", "MATLAB"]
  },
  {
    "name": "Sneha Patel",
    "age": 23,
    "course": "Data Science",
    "isActive": true,
    "skills": ["R", "Machine Learning", "TensorFlow"]
  },
  {
    "name": "Vikram Joshi",
    "age": 25,
    "course": "Mechanical Engineering",
    "isActive": false,
    "skills": ["AutoCAD", "SolidWorks", "ANSYS"]
  },
  {
    "name": "Ananya Gupta",
    "age": 22,
    "course": "Cyber Security",
    "isActive": true,
    "skills": ["Networking", "Linux", "Penetration Testing"],
    "marks":[
{"subject":"Node,js",total:88, isPass:true},
{"subject":"Node,js",total:85, isPass:true},
{"subject":"Node,js",total:86, isPass:true},
{"subject":"Node,js",total:83, isPass:true},
],
  }
])
//->->_>_>_>__>_>__>_>_>_>_>_>_>__>_>_>_>__>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>_>
// 3/4/26:
//db.users.find({},{});
//               |->filter,|->projections(for specific data)inclusion and exclusion
// projection of inclusion and exclusion we cannot use the inclusion and exclusion simultanoiuly in the field
// it only perform for the _id 

//Now we will see update in mongoose:
//        db.users.updateOne({isActive:true},{"$set":{isActive:true,status:"active"}})

// update : $in $set, $addToSet, $push, $nin

/*
marks:[
{"subject":"Node,js",total:88, isPass;true},
{"subject":"Express.js",total:89, isPass;fail},
{"subject":"Node,js",total:86, isPass;true},
{"subject":"Node,js",total:83, isPass;true},
]
*/
//==================================================================================================
/*
07/04/26:
db.users.updateMany({},{
  "$set":{"marks":[{"subject":"Node",total:83, isPass:true}]}
})
method2:for array:
db.users.updateMany(
  {_id:ObjectId('69ce3f12393cf50b07cebeac'),
  },
  {"$set":{
  "marks.$[elem].total":90,
}},{
  arrayFilters:[{"elem.subject":"Node"}]
})
//method:1:for array
db.users.updateMany(
  {_id:ObjectId('69ce3f12393cf50b07cebeac'),
  "marks.subject":"Maths"},
  {"$set":{
  "marks.$[elem].score":100,
}},{
  arrayFilters:[{"elem.subject":"Maths"}]
})

pull: for the update,index position pull
db.users.updateOne({_id:ObjectId('69ce3f12393cf50b07cebeac')},{"pull":{skills:["Linux"]}})
db.users.find({$or:[{isActive:false},{skills:{$in:{"Python"}}}]})
db.users.find({$or:[{"isActive":false},{skills:"Linux"}]})
*/