import React, {useRef} from 'react'

const Formuseref = () => {
    const name=useRef()
    const email=useRef()
    const password=useRef()
    const tel=useRef()

    const display=(e)=>{
        e.preventDefault();  // button click cheyyunnadhinu munne call aavadhirikaan.
    const a=name.current.value;
    const b=email.current.value;  //to access the DOM elements or values associated with the ref.
    const c=password.current.value; // values.current.value is used to access the value property of the DOM element.
    const d=tel.current.value;

    const data ={a,b,c,d};
    console.log(data);
}

  return (
    <div>
        <form onSubmit={display}>
        <input type="text" placeholder='name' ref={name}/>
        <input type="email" placeholder='email' ref={email}/>
        <input type="password" placeholder='password' ref={password}/>
        <input type="tel" placeholder='number' ref={tel}/>
        <input type="submit"/>
        </form>  
        {/* form nde ullil input type koduthal shift/enter adikumbo data/value call aavum. also submit click cheyyumboyum data/value call aavum  */}
    </div>
  )
}

export default Formuseref