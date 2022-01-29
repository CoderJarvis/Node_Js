console.log("Ajax call using xhr request and fecth api");

const getData = async () =>{
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await response.json();     //got our json data
        console.log(data);
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
 .catch(console.error); //print the response only not json

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(res=>res.json())
.then(data=>console.log(data))  //got the json now you can play with the json
.catch(err=>console.error(err));

function myAxios1(method,url)   //for get request
{
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json';
        xhr.onload = () =>{
            resolve(xhr.response);  //json
        }
        xhr.onerror = () =>{
            reject("some error occured");
        }
        xhr.send()
    })
}

const url1 =`https://jsonplaceholder.typicode.com/users`;
myAxios1('GET',url1).then((res)=>{
    console.log(res);   //play with JSON
}).catch((res)=>{
    console.log(res);
})

function myAxios2(method,url,body)  //for post request
{
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.onload = () =>{
            resolve(xhr.response);  //json
        }
        xhr.onerror = () =>{
            reject('error occured');
        }
        xhr.send(JSON.stringify(body));
    })
}

const url2 =`https://jsonplaceholder.typicode.com/posts`;
const myObj = 
            [
                {
                    name : "saswat",
                    age : 23,
                    job : "software developer"
                },
                {
                    name : "nihar",
                    age : 22,
                    job : "data scientist"
                },
                {
                    name : "malaya",
                    age : 24,
                    job : "blockchain developer"
                }
            ]

myAxios2('POST',url2,myObj).then((res)=>{
    console.log(res);
}).catch((res)=>{
    console.log(res);
})




