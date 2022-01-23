var express = require('express')
var app = express()

const hbs=require ('hbs');
const path=require('path');

app.use(express.urlencoded()) //imp to use form in express

const viewPath=path.join(__dirname,'../templates/views');

app.set('view engine','hbs');
app.set('views',viewPath);

app.get("/",(req,res)=>{
    res.render('form.hbs');
})

app.post("/",(req,res)=>{
    console.log(req.body);
    console.log(`your name is ${req.body.name}, you are  ${req.body.age} years old, your gender is  ${req.body.gender} and u r from  ${req.body.address}`);
    res.render('form.hbs');
})


app.listen(3000,() => {
  console.log(`Server running at 3000`);
});
