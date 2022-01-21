var express = require('express')
var app = express()

const hbs=require ('hbs');
const path=require('path');

const partialPath=path.join(__dirname,'../templates/partials');
const viewPath=path.join(__dirname,'../templates/views');

app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialPath);

app.get("/",(req,res)=>{
    res.render('index.hbs',{
        name:"saswat kumar sk",
        age:23
    });
})
app.get("/about",(req,res)=>{
    res.render('about.hbs');
})
app.get("/services",(req,res)=>{
    res.render('services.hbs');
})
app.get("/contact",(req,res)=>{
    res.render('contact.hbs');
})
app.get('*',(req,res)=>{
    res.render('404.hbs',{
        errMsg:"404 page not found"
    })
})


app.listen(3000,() => {
  console.log(`Server running at 3000`);
});
