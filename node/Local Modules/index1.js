//LOCAL MODULES
// var data=require('./method')
// data.methods()
// console.log(data);
//method.js

// var {display1,display}=require('./module')
// display()
// display1()


// var cl=require('cli-color')
// console.log(cl.red('niha'));

// setInterval(function(){   //used to execute a function after a desired amount of time.
//     console.log('hai hello');
// },2000)

// setTimeout(function(){  //used to execute a function after a delay of time .
//     console.log("nihao");
// },1000)

// const a=setInterval(function(){  
//     console.log("marhaba");
// },1000)

// setTimeout(()=>{
//     clearInterval(a)  //used to clear set interval
// },4000)


const b=setTimeout(()=>{
    console.log("annyong")
},4000)

setInterval(()=>{
    console.log('evet')
    clearTimeout(b)
},1000)