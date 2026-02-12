//what is event loop?

const a = () =>{
    setTimeout(()=>{
        console.log("A");
    },10000);
    console.log("aa");
    b();
    
}
const b = () =>{
    setTimeout(()=>{
        console.log("inner function");
        
    },0)
    console.log("B");
    
    Promise.resolve().then(()=>{
        console.log("funct B ");
    });
}
a();
/*
->Event loop is responsible to execute the asyn function when the callsatck is empty
->event loop check the callstack, if  empty ecexute the async function registered in the evn.\
->[function1 ,funtion2] its follow the queue(FIFO)...

*/

/*
their something called priority Queue in which
micro(promisis) task execute first after that macro(other async functions) task executed. In FIFO manner

*/