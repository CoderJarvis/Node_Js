const http=require("http");

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
    else
    {
        res.writeHead(404);
        res.end(`<h1> 404 not found </h1>`)
    }
});
server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running on thr port 3000");   
})