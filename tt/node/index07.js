const fs=require('fs');

fs.writeFile('demo.txt',"im saswat",(err)=>{
    console.log("file created");  
})

fs.appendFile('demo.txt'," i love gaming",(err)=>{
    console.log("data append done");  
})

fs.readFile('demo.txt','utf-8',(err,data)=>{
    console.log(data);        
})

fs.unlink('demo.txt',(err)=>{
    console.log("file deleted");  
})
