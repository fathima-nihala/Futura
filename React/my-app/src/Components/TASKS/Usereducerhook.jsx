import React, { useReducer } from 'react'

 const Usereducerhook = () => {
    const InitialState=0
    const reducer=(state,action)=>{
        console.log('action',action,'state',state)
        console.log(action)
        if(action.type === 'increase'){
            return state=state+1;
        }
        else if(action.type === 'divide'){
            return state=state/2;
        }
        else if(action.type === 'multiply'){
            return state=state*2;
        }
        else{
            return state=0; 
        }

    }
    const[state,dispatch]=useReducer(reducer,InitialState)

  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'increase'})}>Increment</button>
        <button onClick={()=>dispatch({type:'divide'})}>Division</button>
        <button onClick={()=>dispatch({type:'multiply'})}>Multiply2</button>
    </div>
  )
}
export default Usereducerhook