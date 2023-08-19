import React, { useState } from 'react'
import styled from 'styled-components';
const Main=styled.div`
background-color:red;
`


function StyledComponent() {
  const [state,setState]=useState(0)
 
  function display(){
    setState(state+1)
  }
  function display2(){
    setState(0)
  }
  return (
    <Main>
                <h1>{state}</h1>
                <button onClick={display}>Click</button>
                <button onClick={display2}>Reset</button>
            </Main>

  )
}

export default StyledComponent