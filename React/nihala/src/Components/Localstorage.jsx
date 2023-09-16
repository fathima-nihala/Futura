import React from 'react'

function Localstorage() {

    //local storage
    localStorage.setItem('student','nihala')
    const a=localStorage.getItem('student')
    console.log('***',a)

    //session storage
    sessionStorage.setItem('programmer','Nihala')
    const b=sessionStorage.getItem('programmer')
    console.log('***',b)

    //array destructure
    const number=[14,15,'abc',24,30];
    const[c,d,e,f,g]=number;
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);

    //object destructure
    const person={
        name:'nihala fathima',
       domain:'mernstack',
       Age:20,
        address:{
            state:'calicut'
        }
    };
    const {name,domain,Age,address:{state}}=person
    console.log(name);
    console.log(domain);
    console.log(Age);
    console.log(state);

    //string operator (...)
    const h={a:1,b:2,c:3}
    const i={d:4,e:5,f:6}
    const j=({...h,...i})
    console.log(j);


   




    



  return (
    <div>Localstorage</div>



  )
}

export default Localstorage
