import React, { useState } from 'react'

const UseState = () => {
    // usestate is used to manage the state in react
    //onclick is the button method
    // we have to import useState from react
    const [value, setValue] = useState(10); //value means 10 initial or default value setvalue bhaneko update bhakoo valu9e
  return (
    <div className='button'>
<button onClick ={()=>{setValue(value+5)}}>increase</button>
{value}
<button onClick ={()=>{setValue(value-1)}}>Decrease</button>
    </div>
  )
}

export default UseState