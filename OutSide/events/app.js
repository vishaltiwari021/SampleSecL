const EventEmitter = require('events');


//create instance:
const emitter  = new EventEmitter(); 

//Define an event listener:
// emitter.on("greet", () =>{
//     console.log("hello thi is vishal");
// })
// // Triger (emit) /call the function(like)
// emitter.emit("greet")

//you can pass arguments too:
// emitter.on("greet", (name,prof) =>{
//     console.log(`hello this ${name} and i am ${prof}`);
// })
// // Triger (emit) /call the function(like)
// emitter.emit("greet","vishal","developer")

//you can passa as a object as like this:
emitter.on("greet", (agr) =>{
    console.log(`hello this ${agr.name} and i am ${agr.prof}`);
})
// Triger (emit) /call the function(like)
emitter.emit("greet",{name:"vishal",prof:"developer"})
