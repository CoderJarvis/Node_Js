const http=require("http");
const fs=require('fs');

const server=http.createServer((req,res)=>{
    let url=req.url;
   
    if(url=='/')
    {
        res.end("this is home page");
    }
    else if(url=='/about')
    {
        res.end("this is about page");
    }
    else if(url=='/contact')
    {
        res.end("this is contact page");
    }

    else if(url=='/myapi')
    {   
        fs.readFile('./myApi.json','utf-8',(err,data)=>{
        res.end(data);
        const obj=JSON.parse(data);
        console.log(obj[3].email);           
        })
    }

    else
    {
        res.writeHead(404);
        res.end(`<h1> 404 not found </h1>`)
    }
});
server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running on thr port 3000");   
})