const fs  = require("fs");
const path = require('path')

const fileName = 'fspromises.txt';
const filePath = path.join(__dirname,fileName);

// const file = __dirname;

// fs.promises.readdir(file)
// .then((data) => console.log(data))
// .catch((err) =>console.log(err));

//write:
// fs.promises.writeFile(filePath,"this is the promises file",'utf8')
// .then((console.log("file created")))
// .catch((err)=> console.log(err))

//read
fs.promises.readFile(filePath,'utf8')
.then((data) => console.log(data))
.catch((err) => console.log(err))

//append:
fs.promises.appendFile(filePath,"\n new line added",'utf8')
.then((console.log("updated")))
.catch((err) => console.log(err))
//delete:
fs.promises.unlink(filePath)
.then((console.log("deleted")))
.catch((err) => console.log("deleted file", err))