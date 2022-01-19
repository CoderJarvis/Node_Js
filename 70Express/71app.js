// console.log('this is 70 tutorial');

const express=require("express");
const app=express();

const port=3000;


app.get("/",(req,res)=>{
    res.send("this is my home page");
})

app.get("/about",(req,res)=>{
    res.send("this is my about page");
})
app.get("/services",(req,res)=>{
    res.send("this is my services page");
})
app.get("/contact",(req,res)=>{
    res.send("this is my get request contact page");
})

app.post("/contact",(req,res)=>{
    res.send("this is my post request contact page");
})



app.listen(port,()=>{
    console.log(`the application has started succesfully on port ${port}`);
    
})