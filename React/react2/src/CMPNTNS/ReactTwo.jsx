// import React, { useState } from 'react'
// import { Abcdefg } from './ReactOne'

// export const ReactTwo = () => {
//     const [state,setState]=useState(0)
//     const [state1,setState1]=useState(0)

//     console.log('parent rendered');

//     function show(){
//         setState(state+1)
//     }
//     function show1(){
//         setState1(state1+1)
//     }
//   return (
//     <div>
//         <h2>state: {state}</h2>
//         <h2>state1: {state1}</h2>
//         <button onClick={show}>Click1</button>
//         <button onClick={show1}>Click2</button>
//         <Abcdefg value={state}/>
//     </div>
//   )
// }
// export default ReactTwo


import React from 'react'

function ReactTwo(props) {
    console.log('child rendered');    
  return (
    <div>
        <h2>React two:State :{props.value}</h2>
    </div>
  )
}

export default ReactTwo
export const Abcdefg=React.memo(ReactTwo)

// react memo's child