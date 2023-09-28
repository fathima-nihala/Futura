import React from 'react'

export const Child2 = (props) => {
    console.log('child rendered');    

  return (
    <div>
                <h2>React two:State :{props.value}</h2>

    </div>
  )
}
  export const Abcdefg=React.memo(Child2)

  //usecallback's child