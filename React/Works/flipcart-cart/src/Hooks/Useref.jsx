import React, { useEffect, useRef } from 'react'

const Useref = () => {
    const sampleref=useRef()
    const sampleref1=useRef()
    const input1=useRef()
    
    useEffect(()=>{
        input1.current.focus()
    },[])

    const show=()=>{
        sampleref.current.style.backgroundColor='yellow'
        sampleref1.current.style.color='green'
        sampleref1.current.innerText='Fake Fairy'
        sampleref.current.innerHtml='<h1>Fake World</h1>'
    }
  return (
    <div ref={sampleref}>
        <h1 ref={sampleref1}>Get Lost.</h1>
        <button onClick={show}>Dont Touch</button>
        <div>
        <input type="text" placeholder="Name"/>
          <input type="text" placeholder="age"/>
          <input ref={input1} type="text" placeholder="domain"/>
          <input type="text" placeholder="address"/>
          <input type="text" placeholder="state"/>
        </div>
    </div>
  )
}

export default Useref