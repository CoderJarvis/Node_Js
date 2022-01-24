console.log("this is module");

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

function sum(arr)
{
    let s=0;
    arr.forEach(ele=>{
        s+=ele;
    });
    return s;
}
function greater(arr)
{
    max=0;
    arr.forEach(ele=>{
        if(ele>max)
        {
            max=ele;
        }
    })
    return max;
}

function smaller(arr)
{
    min=Number.MAX_SAFE_INTEGER;
    arr.forEach(ele=>{
        if(ele<min)
        {
            min=ele;
        }
    })
    return min;
}

//to exports multiple funtions we have to make an object
module.exports = {
    avg:average,
    sum:sum,
    max:greater,
    min:smaller
}
