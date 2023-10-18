import React from 'react'

const ReactMemoChild = (props) => {
    console.log('child rendered')
  return (
    <div>ReactMemoChild: state:{props.value}</div>
  )
}

export default ReactMemoChild
export const Abcdef=React.memo(ReactMemoChild)