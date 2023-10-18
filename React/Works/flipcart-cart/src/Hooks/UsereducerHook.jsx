import React, { useReducer } from 'react'
import UseRedChild from './UseRedChild';

const UsereducerHook = () => {
    const initialState=0
    const reducer=(state,action)=>{
        console.log('state',state,'action',action);
        console.log(action);
        switch(action.type){
            case 'increase':
            return state=state+1;
            case 'decrease':
                return state=state-1;
                default :
                return state
        }
    }
    const[state,dispatch]=useReducer(reducer,initialState)  
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'increase'})}>Increment</button> &nbsp;
        <button onClick={()=>dispatch({type:'decrease'})}>Decrement</button>
        <UseRedChild value={state}/>
    </div>
  )
}

export default UsereducerHook