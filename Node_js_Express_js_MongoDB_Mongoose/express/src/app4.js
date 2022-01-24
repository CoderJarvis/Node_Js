const path = require('path');
var express = require('express')
var app = express()

// serving static files
const staticPath=path.join(__dirname,"../static/CSS_Project_1_SkFood");
app.use(express.static(staticPath));

app.listen(3000,() => {
  console.log(`Server running at 3000`);
});
