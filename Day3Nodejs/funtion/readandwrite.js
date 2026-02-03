//built in module:
import fs  from 'fs';


//Sync Functio:
console.log("satar");

const output = fs.readFileSync("File.txt", "utf8")
console.log(output);

fs.writeFileSync("file.txt", "hello world")
fs.appendFileSync("file.txt", "\nhello agian");
console.log("end");

//Async function:

console.log("start");
fs.readFile("file.txt","utf8",(err,output)=>{
    if(err){
        console.log("errr" ,err);
    }
    else{
        console.log("output",output);
    }
})
console.log("end");


