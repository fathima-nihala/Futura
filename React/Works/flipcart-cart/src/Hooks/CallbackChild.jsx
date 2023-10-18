import React from 'react'

const CallbackChild = (props) => {
    console.log('child rendered');
  return (
    <div>CallbackChild this.state.:{props.value}</div>
  )
}

export default CallbackChild
export const Wyz=React.memo(CallbackChild)