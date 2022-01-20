let events=require('events');
let eventEmmiter=new events.EventEmitter();

eventEmmiter.on('sayMyName',()=>{
    console.log("my first name is saswat"); 
})
eventEmmiter.on('sayMyName',()=>{
    console.log("my second name is kumar"); 
})
eventEmmiter.on('sayMyName',()=>{
    console.log("my third name is panda"); 
})

eventEmmiter.on('checkStatus',(sc,msg)=>{
    console.log(`the status code is ${sc} and the server is running ${msg}`);
})

eventEmmiter.emit('sayMyName');
eventEmmiter.emit('checkStatus',404,"failed");