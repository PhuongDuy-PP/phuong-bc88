import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name={"Phuong"} age={18} />
        <br />
        <Child name={"Cybersoft"} age={10} />
    </div>
  )
}

export default Parent