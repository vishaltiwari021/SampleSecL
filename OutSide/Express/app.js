import Express from 'express';
import path from "path";

const app = Express();

//absolutepath:
const staticPath = path.join(import.meta.dirname,"public")
//middleware:
app.use(Express.static(staticPath));//it will chcek the public folder
//port:
const PORT  = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    console.log("working ");
    res.sendFile("index.html")
})
// dynamic path/route:
app.get('/profile/:username',(req,res)=>{
    console.log(req.params);//by using this we can excess the dynamic route
    res.send(`<h1>hell this is ${req.params.username}</h1>`);
});

app.get('/profile/:username/artical/:slug',(req,res)=>{
    console.log(req.params.slug);
    
    const fromatedSlug  = req.params.slug.replace(/-/g," ");
    res.send(`<h1>hello this is ${req.params.username} and thi is my artical ${fromatedSlug}</h1>`)
})
//query parameter:
app.get('/product',(req,res)=>{
    console.log(req.query);
    res.send(`<h1>hell this is query parametere ${req.query.search}</h1>`)
    
})
app.listen(PORT,()=>{
    console.log(`The server is line on PORT: ${PORT}`);
})