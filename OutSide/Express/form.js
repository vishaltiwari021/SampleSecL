import express from "express"
import path from "path"


const app = express();
const PORT  = 8000;

//absolute path:
const staticPath = path.join(import.meta.dirname,"public");
//middlewares:
app.use(express.static(staticPath));
app.use(express.urlencoded({extended:true}));//to help in parse the form data...

//********we are not use this method cause leakage of credintials */
// app.get('/contact',(req,res)=>{
//     console.log(req.query);
//     res.redirect('/')
// })
//************************************************************************ */
//when we dealing with form we use the post request..

//for invalid root path:
app.use((req,res)=>{
    return res.status(404).sendFile(path.join(import.meta.dirname,"views","404.html"))
})

app.post('/contact',(req,res)=>{
    console.log(req.body);
    res.redirect('/')
    
})


app.listen(PORT,()=>{
    console.log(`server live on port ${PORT}`);
    
})