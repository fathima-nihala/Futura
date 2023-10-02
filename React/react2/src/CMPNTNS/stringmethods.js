// import { connect } from "react-redux";

//CharAT
const a='indipendance'
const b='india'
// console.log(a.charAt(1));

//CharCodeAt
// console.log(a.charCodeAt(0));

//Concate
// console.log(b.concat(a));

//Endswith
// console.log(a.endsWith('ce'));

//Startwiith
// console.log(a.startsWith('i'));

//Includes
// console.log(a.includes('d'));

//Lastindex
// console.log(a.lastIndexOf('d'));

//Match
// console.log(a.match(/e/g,'*')); //g is global(predefined)

//Repeat
// console.log(b.repeat(5));

//Replace
// console.log(a.replace(/e/g,'*'));

//Search
// console.log(a.search('e'));

//Slice
// console.log(a.slice(2,4));

//Substring
// console.log(a.substring(2,4));

//ToLowerCase
// console.log(a.toLocaleLowerCase());

//ToUpperCase
// console.log(a.toLocaleUpperCase());

//fount
const user=[
    {id:1,name:'niha', domain:'mern'},
    {id:2,name:'kashu',domain:'c'},
    {id:3,name:'amz',domain:'python'},

]
const userIdToFind=3;
const foundUser=user.find(user=>user.id==userIdToFind);
if(foundUser){
    console.log(`user found:${foundUser.name} domain:${foundUser.domain}`);
}
else{
    console.log('user not found');
}

 