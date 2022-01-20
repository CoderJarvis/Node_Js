let fs=require('fs');

let OBJdata={
    name:"saswat",
    age:23,
    clg:"trident",
    deg:"software developer"
}
let JSONdata=JSON.stringify(OBJdata);

fs.writeFile('index18a.json',JSONdata,(err)=>{
    console.log("file created");  
})

fs.readFile('index18a.json','utf-8',(err,newJSONdata)=>{
    console.log(newJSONdata);   //json
    let newOBJdata=JSON.parse(newJSONdata);
    console.log(newOBJdata);    //object
})

// newJSONdata =>
// {"name":"saswat","age":23,"clg":"trident","deg":"software developer"}
// newOBJdata =>
// { name: 'saswat', age: 23, clg: 'trident', deg: 'software developer' }