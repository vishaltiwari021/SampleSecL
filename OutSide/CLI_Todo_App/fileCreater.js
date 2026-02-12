import readline from "readline";
import fs from "fs";
import { error } from "console";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const fileCreation = () =>{
    rl.question("Enter the fileName : ", (filename)=>{
        rl.question("Add the content in the file :" ,(content)=>{
            fs.writeFile(`${filename}.txt`, content, (err)=>{
                if(err){
                    console.error("Error while writing the file : ",err.message);
                }else{
                    console.log(`File "${filename}.txt" is created successfully!`);
                }
            rl.close()
            })
        })
    })
}
fileCreation();