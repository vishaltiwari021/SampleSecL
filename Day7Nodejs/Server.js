//Create First Server
const http =  require("http");
const fs  =  require("fs");
const path = require("path");

//const countFile  = path.join(__dirname, "count.txt");

const server  = http.createServer((req,res) =>{
   const requesturl = req.url;
    console.log("request", requesturl);
    const requestmethod  = req.method;
    console.log("request", requestmethod);

   if(requesturl === '/'){
    res.end("home page")
   }
   if(requesturl === '/about'){
    res.end("about page")
   }
   if(requesturl === '/contact'){
    res.end("contact page")
   }
    
});

 //fs.writeFile(countFile, 'utf8')

server.listen(3000,()=>{
    console.log(`server is live on port${3000}`);
    
});

