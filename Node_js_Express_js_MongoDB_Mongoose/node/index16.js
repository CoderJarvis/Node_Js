const http=require("http");

const server=http.createServer((req,res)=>{
    res.end("my first web server");
});
server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running on thr port 3000");   
})