let data={
    name:"saswat",
    age:24,
    cog:"trident"
}
console.log(data);  //object

let JSONstr=JSON.stringify(data);   
console.log(JSONstr);   //JSON

let JSONobj=JSON.parse(JSONstr);
console.log(JSONobj);   //object

// { name: 'saswat', age: 24, cog: 'trident' } //object
// {"name":"saswat","age":24,"cog":"trident"}   //json