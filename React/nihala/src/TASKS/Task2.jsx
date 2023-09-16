import React, {useRef} from 'react'
import './Task2.css'
function Task2() {
    const button=useRef();

    const change=()=>{
        button.current.style.backgroundColor='gray'
        button.current.innerHTML='<h1>It does my heart a world of good,to see you in a box of wood</h1> <br /> <img src="https://cdn.getyourguide.com/img/tour/5e29f43b904fd.jpeg/146.jpg" alt="" /><br /><button><a href="http://localhost:3001/niha">I will catch you</a></button>'
    }
  return (
    <>
        <div className='main' style={{backgroundColor:'whitesmoke'}}>
            <div ref={button}>
                <h1>Welcome</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cskdJyqvLMmizwhsZGJS5_pX7staOb3Ytg&usqp=CAU" alt="" /> 
                &nbsp;<br /><button onClick={change} style={{color:'green',fontSize:24}}>Click here</button>
            </div>
        </div>   
    </>
  )
}
export default Task2