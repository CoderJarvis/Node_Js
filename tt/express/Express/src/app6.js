var express = require('express')
var app = express()

// for serving dynamic webpage
app.set('views','../templates/views');
app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render('index.hbs',{
        name:"saswat kumar sk",
        age:23
    });
})

app.listen(3000,() => {
  console.log(`Server running at 3000`);
});
