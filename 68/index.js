console.log('we are using our custome module');
const mod=require('./mod');
let arr=[10,20,30,40,50];
console.log("the average is "+mod.avg(arr));
console.log("the sum is "+mod.sum(arr));
console.log("the max element is "+mod.max(arr));
console.log("the min element is "+mod.min(arr));

