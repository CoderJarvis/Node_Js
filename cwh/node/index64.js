const fs=require("fs");
let text=fs.readFileSync("index64i.txt","utf-8");
console.log(text);
text=text.replace("panda","sk");
console.log(text);

console.log('creating a file....');
fs.writeFileSync("index64ii.txt",text);
console.log('new file created');


