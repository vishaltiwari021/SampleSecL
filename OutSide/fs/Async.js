
const fs = require('fs');
const path  = require('path');


const fileName  = "fsAsyncs.txt";
const filePath  = path.join(__dirname,fileName);
console.log(__dirname);

//write operation:
// fs.writeFile(filePath,"hello this is me!",'utf8',(err)=>{
//     if(err) console.error(err);
//     else console.log("file saved");
    
// })
//read:
// fs.readFile(filePath,'utf8',(err,data)=>{
//     if(err) console.error(err);
//     else console.log(data);
   
// })
// append
// fs.appendFile(filePath, '\n new line added','utf8',(err)=>{
//     if(err) console.error(err);
//     else console.log("updated file");
    
// })
//delete
// fs.unlink(filePath,(err)=>{
//     if(err) console.error(err);
//     else console.log("file deleted");
    
// })