import React, {  useEffect, useState,  } from 'react'
import InputType from './InputType';

const UseEffect = () => {
    //usestate render 2st time but useeffect render 1nd time
     const [Data, SetData] = useState("");
    const HandleClick = () => {
        const ayy= "data updating"
        console.log(ayy);
    }
    useEffect(() => {
        const ayy= "data updated"
        console.log(ayy);
    }, []);
    
  return (
    <div>
      <button onClick={HandleClick}> Click Me </button>
      <br/>
      <button onClick={<InputType></InputType>}></button>
    </div>
  )
}

export default UseEffect