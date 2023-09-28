import React, { useReducer } from 'react'
import Child from './Child';


function Usereducer() { //useReducer  primarily used for managing complex state logic in functional components
    const InitialState=0
    const reducer=(state,action)=>{ //reducer: A function that defines how state transitions should occur based on dispatched actions. 
                                    //It takes the current state and an action as arguments and returns a new state.
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
    const[state,dispatch]=useReducer(reducer,InitialState)// state: The current state value, similar to what you get with useState.
                                                         //dispatch: A function used to dispatch actions to update the state.
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'increase'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrease'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'increment2'})}>Increment2</button>
        <button onClick={()=>dispatch({type:'decrement2'})}>Decrement2</button>
        <button onClick={()=>dispatch({type:'multiply2'})}>Multiply2</button>
        <Child value={state}/>
    </div>
  )
}

export default Usereducer