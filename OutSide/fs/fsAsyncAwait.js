const fs  = require('fs');
const path = require("path");

const fileName = "fawait.txt";
const filePath = path.join(__dirname,fileName);

const file  = __dirname;
console.log(file);


// const readFolder = async() =>{
//     try {
//     const res  = await fs.promises.readdir(file);
//     console.log(res);
    
//     } catch (err) {
//         console.error(err);
        
//     }
// }

// readFolder();

//write:
// const performWrite = async() =>{
//     try {
//         await fs.promises.writeFile(filePath,"this is async and await",'utf8')
//         console.log("file created sussfuly");
        
//     } catch (error) {
//         console.error(error);
        
//     }
// }
// performWrite();

//read:
// const performRead = async() =>{
//     try {
//         const rea = await fs.promises.readFile(filePath,'utf8')
//         console.log(rea);
        
//     } catch (error) {
//         console.error(error);
        
//     }
// }
// performRead()

// append

// const performAppend = async() =>{
//     try {
//         await fs.promises.appendFile(filePath,"\n this is new linw ",'utf8')
//         console.log("new added");
        
//     } catch (error) {
//         console.error(error);
        
//     }
// }
// performAppend()

//deleted:

// const performDelete = async() =>{
//     try {
//         await fs.promises.unlink(filePath,)
//         console.log("deleted");
        
//     } catch (error) {
//         console.error(error);
        
//     }
// }
// performDelete()