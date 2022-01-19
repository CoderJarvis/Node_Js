const fs=require('fs');
fs.writeFileSync('demo.txt',"this is saswat kumar panda ");
fs.appendFileSync('demo.txt',"i love playing badminton");
let file=fs.readFileSync('demo.txt','utf-8');
console.log(file);
fs.renameSync('demo.txt','myBio.txt');
fs.unlinkSync('myBio.txt');