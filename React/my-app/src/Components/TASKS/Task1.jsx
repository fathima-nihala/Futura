import React,{useRef} from "react";
import { Link } from "react-router-dom";

function Task1() {
    const button1=useRef();
    const button2=useRef();
    const button3=useRef();
    const button4=useRef();

    function Task11(){
        if(button1.current){
            button1.current.style.backgroundColor='red';
            button3.current.style.backgroundColor='black';
            button4.current.style.backgroundColor='black';
            button2.current.style.backgroundColor='black';



        }
    }
    function Task12(){
        if(button2.current){
            button2.current.style.backgroundColor='red';
            button1.current.style.backgroundColor='black';
            button3.current.style.backgroundColor='black';
            button4.current.style.backgroundColor='black';


        }
    }
    function Task13(){
        if(button3.current){
            button3.current.style.backgroundColor='red';
            button2.current.style.backgroundColor='black';
            button1.current.style.backgroundColor='black';
            button4.current.style.backgroundColor='black';


        }
    }
    function Task14(){
        if(button4.current){
            button4.current.style.backgroundColor='red'
            button3.current.style.backgroundColor='black';
            button1.current.style.backgroundColor='black';
            button2.current.style.backgroundColor='black';

        }
    }

  return (
    <>
    <Link to={'niha'}><p>hello</p></Link>
    <div ref={button1}><h1>Hello</h1>
    <button onClick={Task11}>Click</button>
    </div>
    <div ref={button2}><h1>Hello</h1>
    <button onClick={Task12}>Click</button>
    </div>
    <div ref={button3}><h1>Hello</h1>
    <button onClick={Task13}>Click</button>
    </div>
    <div ref={button4}><h1>Hello</h1>
    <button onClick={Task14}>Click</button>
    </div>
    </>
  )
}

export default Task1