// console.log(50);
// console.log("ram");
// for(let i =0;i<100;i++){
//     console.log(i);
    
// }
// console.log("hari");

// what si blocking and non=blocking\
//-----------------29/01/26------------callstack and blocking code and non-blocking code-------------
console.log("1");
const getconsole =()=>{
    console.log("2");
    setTimeout(()=>{
        console.log("3");
        
    },2000);
    setTimeout(()=>{
        console.log("3a");
        
    },1000);
    
};

getconsole();
for (let i =0 ; i<5e9;i++){}
console.log("4");
