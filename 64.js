const fs=require("fs");
let text=fs.readFileSync("64.txt","utf-8");
console.log(text);
text=text.replace("panda","sk");
console.log(text);

console.log('creating a file....');
fs.writeFileSync("64a.txt",text);
console.log('new file created');


