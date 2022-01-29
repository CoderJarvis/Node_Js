console.log("learn fetch api");
const myApiUrl = `https://jsonplaceholder.typicode.com/posts`;

const getData = async () =>{
    try{
        const response = await fetch(myApiUrl);
        const data = await response.json();     //json became object
        // console.log(data);
        console.log(data[0].title);    //thus you can play with json
    }
    catch(e)
    {
        console.log("some error occured");
        console.log(e);
    }
}
getData();

 fetch(`https://jsonplaceholder.typicode.com/posts`)
 .then(console.log)
 .catch(console.error); //send the response

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(res=>res.json())
.then(data=>console.log(data))  //play with json
.catch(err=>console.error(err)); 

