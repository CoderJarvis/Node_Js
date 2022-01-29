var express = require('express')
var app = express()

app.get('/',  (req, res)=> {
    res.send(`<h1>heloo</h1>`)
})
app.get('/about',  (req, res)=> {
  res.write(`<h1>heloo</h1>`)
  res.write(`<h1>world</h1>`)
  res.send();
})

app.get('/contact',(req,res)=>{
    res.json([
        {
            name:"saswat",
            age:23,
            clg:"trident"
        },
        {
            name:"nihar",
            age:23,
            clg:"igit"
        },
        {
            name:"raja",
            age:23,
            clg:"vn"
        }
]);
})

// [{"name":"saswat","age":23,"clg":"trident"},{"name":"nihar","age":23,"clg":"igit"},{"name":"raja","age":23,"clg":"vn"}]



app.listen(3000,() => {
  console.log(`Server running at 3000`);
});