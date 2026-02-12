//what is callback function?

const fetchData = (cb)=>{
    cb("data initiated")
};
fetchData((data)=>{
    console.log("data:",data);
    
});

