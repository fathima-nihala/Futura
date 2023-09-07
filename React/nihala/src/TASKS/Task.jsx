import React, {useRef} from 'react'

function Task() {
    const button1 = useRef();
  const button2 = useRef();
  const button3 = useRef();
  const button4 = useRef();


  function task1() {
    
    if (button1.current) {

      button1.current.style.backgroundColor = 'green';
      button2.current.style.backgroundColor = 'black';
      button3.current.style.backgroundColor = 'black';
      button4.current.style.backgroundColor = 'black';

      
    }
  }

  function task2() {
    if (button2.current) {
      button2.current.style.backgroundColor = 'green';
      button1.current.style.backgroundColor = 'black';
      button3.current.style.backgroundColor = 'black';
      button4.current.style.backgroundColor = 'black';

    }
    
  }
  function task3() {
    if (button2.current) {
      button2.current.style.backgroundColor = 'black';
      button1.current.style.backgroundColor = 'black';
      button3.current.style.backgroundColor = 'green';
      button4.current.style.backgroundColor = 'black';

    }
    
  }
  function task4() {
    if (button2.current) {
      button2.current.style.backgroundColor = 'black';
      button1.current.style.backgroundColor = 'black';
      button3.current.style.backgroundColor = 'black';
      button4.current.style.backgroundColor = 'green';

    }
    
  }

  return (
    <div>
    <div ref={button1} >
      <h1>Hello</h1>
      <button onClick={task1}>Click</button>
    </div>
    <div ref={button2}>
      <h1>Hello</h1>
      <button onClick={task2}>Click</button>
    </div>
    <div ref={button3}>
      <h1>Hello</h1>
      <button onClick={task3}>Click</button>
    </div>
    <div ref={button4}>
      <h1>Hello</h1>
      <button onClick={task4}>Click</button>
    </div>
  </div>

  )
}

export default Task