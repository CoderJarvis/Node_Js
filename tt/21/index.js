const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const rstream=fs.createReadStream('./input.txt');

    // rstream.on('data',(chuck)=>{
    //     res.write(chuck);
    // })
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on('error',(err)=>{
    //     res.end("file not found")
    //     console.log(err);
    // })

    rstream.pipe(res);  //best method//reading(chunk) + writing(chunk)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});