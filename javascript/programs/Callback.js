//promise
function hello(n1,n2){
    return new Promise((res,rej)=>{
res(n1+n2)
    })
}
function hai(n1,n2){
    return new Promise((res,rej)=>{
res(n1-n2)
    })
}
hello(10,12).then((data)=>{
    console.log(data);
    return hai(data,10)
}).then((value)=>{
    console.log(value)
})