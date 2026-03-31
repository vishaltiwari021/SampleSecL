//today we learn about EJS Server Side Rendring...

import express from "express"

const app = express();

app.set("view engine","ejs")


const homepageContent = {
     header:{title:"GLA header"},
     content:{title:"GLA Content"},
     footer:{title:"GLA footer"},
     data:{
         university: "GLA University",
        student: [
            {name:"student1",dept:"CSE"},
            {name:"student2",dept:"EEE"},
        ]
     }
}


app.get('/gla',(req,res)=>{
    res.render('home',homepageContent);

})

app.get('/footer',(req,res)=>{
    res.render('header',homepageContent.header);

})
app.get('/header',(req,res)=>{
    res.render('footer',homepageContent.footer);

})
app.get('/content',(req,res)=>{
    res.render('content',homepageContent.content);

})



app.listen(4000,()=>{
    console.log(`server is running on port :`+ 4000);
    
})