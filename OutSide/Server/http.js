const http = require("http");

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.write("welcome to the website ");
        res.end();
    }
    if(req.url === '/home'){
        res.write("welcome to the home page:::");
        res.end();
    }
    if(req.url === '/contact'){
        res.setHeader("Content-Type","text/plain")
        res.write("coantact me the 567856786");
        res.end();
    }
})

const PORT  = 3000;

server.listen(PORT,()=>{
    console.log(`🔥 server is libe on port${PORT}`);
    
})