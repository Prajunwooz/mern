import React, {  useEffect, useState } from 'react'

const UseEffect = () => {
    //usestate render 1st time but useeffect render 2nd time
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
    </div>
  )
}

export default UseEffect