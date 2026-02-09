import React, { useState } from 'react'

const UseState = () => {
    // usestate is used to manage the state in react
    //onclick is the button method
    // we have to import useState from react
    //
    const Data1= localStorage.setItem("name","prajun")
  const Data2= sessionStorage.setItem("sessionname","puri")
  const Data3= localStorage.getItem("name")
  const Data4= sessionStorage.getItem("sessionname")
  console.log(Data3);
  console.log(Data4);
    const [value, setValue] = useState(10); //value means 10 initial or default value setvalue bhaneko update bhakoo valu9e
  return (
    
    <div className='button'>
      {Data3} {Data4}
<button onClick ={()=>{setValue(value+5)}}>increase</button>
{value}
<button onClick ={()=>{setValue(value-1)}}>Decrease</button>
    </div>
  )
}

export default UseState