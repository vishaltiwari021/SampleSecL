import https from "https";
import chalk from "chalk"

const getjoke = () =>{
    const url ="https://official-joke-api.appspot.com/jokes/random";
    https.get(url,(response) =>{
        let data = "";
        response.on('data',(chunk) =>{
            data+= chunk;
        });

        response.on('end', ()=>{
            const joke  = JSON.parse(data);
            // console.log(joke);
            console.log(`Here the random ${joke.type}joke: `);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
            
        });
        response.on('erroe',(err)=>{
            console.log(`error in the api, ${err.message}`);
            
        })
    })
}




getjoke()