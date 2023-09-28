// import React from 'react'

// export const ReactOne = (props) => {

//     console.log('child rendered');
//   return (
//     <div>
//         <h2>React two:State :{props.value}</h2>
//     </div>
//   )
// }
// export default ReactOne
// export const Abcdefg=React.memo(ReactTwo)

// import React from 'react'

// function ReactOne(props) {


//     console.log('child rendered');



    
//   return (
//     <div>
//         <h2>React two:State :{props.value}</h2>
//     </div>
//   )
// }

// export default ReactOne


import React, { useState } from 'react'
import  {Abcdefg}  from './ReactTwo'

export const ReactOne = () => {
    const [state,setState]=useState(0)
    const [state1,setState1]=useState(0)

    console.log('parent rendered');

    function show(){
        setState(state+1)
    }
    function show1(){
        setState1(state1+1)
    }
  return (
    <div>
        <h2>state: {state}</h2>
        <h2>state1: {state1}</h2>
        <button onClick={show}>Click1</button>
        <button onClick={show1}>Click2</button>
        <Abcdefg value={state}/>
    </div>
  )
}
export default ReactOne
 // react memo's example
 //used to avoid rerundering of child