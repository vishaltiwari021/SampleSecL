import readline  from "readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos = []

const showMenu = () =>{
    console.log("\n1: Add a task");
    console.log("2: View a task");
    console.log("3: Exit ");
    rl.question("Chose an options :",handleInput)
}

const handleInput = (Option) =>{
    if(Option === "1"){
        rl.question("Enter the task : ",(task)=>{
            todos.push(task);
            console.log("task added :",task);
            showMenu()
        
        })
    }
    else if(Option === "2"){
        console.log("\n Your todo list :");
        todos.forEach((task,index)=>{
            console.log(`${index+1}.${task}`);
        })
        showMenu();
    }
    else if(Option === "3"){
        console.log("Good Bye");
        rl.close();
    }
    else{
        console.log("invalid option . pls try again");
        showMenu();
    }
} 
showMenu();