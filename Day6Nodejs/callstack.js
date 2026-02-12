//what is call stack?
/*
empty stack: 
->line1 push to stack
->executed (if executable) then
->poped
continue till stack empty...
*/
const a = () =>{
    c();
    console.log("A", 2+3);//5
    
}
const b = () =>{
    console.log("B",2*3);//6
    
}
const c = () =>{
    console.log("kkk");
    console.log("C",2/3);//0.6
    b()
    
}
a();
/*
->A push to stack
->B push to stack
->C push to stack
->executed (if executable) then
->poped
->B executed (if executable) then
->poped
->A executed (if executable) then
->poped
*/

//event loop-------------------------------------------------------------
