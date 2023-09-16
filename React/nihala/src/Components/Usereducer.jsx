import React, { useReducer } from 'react'

function Usereducer() {
    const InitialState=0
    const reducer=(state,action)=>{
        console.log('action',action,'state',state);
        console.log(action);
        switch(action.type){
            case 'increase':
                return state=state+1;
            case 'decrease':
                return state=state-1;
            case 'increment2':
                return state=state+2;
            case 'decrement2':
                return state=state-2;
            case 'multiply2':
                return state=state*2;
                default:
                    return state
        }
    }
    const[state,dispatch]=useReducer(reducer,InitialState)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'increase'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrease'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'increment2'})}>Increment2</button>
        <button onClick={()=>dispatch({type:'decrement2'})}>Decrement2</button>
        <button onClick={()=>dispatch({type:'multiply2'})}>Multiply2</button>
        
    </div>
  )
}

export default Usereducer