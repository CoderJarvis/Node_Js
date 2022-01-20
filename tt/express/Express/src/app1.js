var express = require('express')
var app = express()

app.get('/',  (req, res)=> {
    res.send('GET request to the homepage')
})
app.get('/about',  (req, res)=> {
  res.status(200).send('i am saswat kumar sk')
})
  
app.post('/', (req, res)=> {
    res.send('POST request to the homepage')
})


app.listen(3000,() => {
  console.log(`Server running at 3000`);
});