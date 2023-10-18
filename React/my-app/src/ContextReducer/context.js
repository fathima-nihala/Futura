import { createContext } from "react";
import { useReducer, useEffect } from "react";

const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem('user'))|| null,
}

export const userContext=createContext(INITIAL_STATE)  //userContext is user-defined

export const UserReducer=(state,action)=>{
    console.log('action.payload',action.payload,'action.type',action.type);
    switch(action.type){
        case 'LoginSuccess' :
            return{user:action.payload}
            case 'Remove' :
                return{user:null}
    
            default:
                return state

    }
}
export const UserInfoContextProvider=({children})=>{  //"UserInfoContextProvider"  is userdefined
    const [state,dispatch]=useReducer(UserReducer,INITIAL_STATE)

    useEffect(()=>{   //   "localStorage.setItem" local storage l store cheyyan
        localStorage.setItem('user',JSON.stringify(state.user))  //'JSON.stringify' keyvalue-pairs ne string lek mattaan
    },[state.user])   //"[state.user]" to maintain side effect..

    return(
        <userContext.Provider value={{user:state.user,dispatch}}>
            {children}
        </userContext.Provider>
    )
}