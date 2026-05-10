import React, { useState } from 'react'

// const UseStateImage = () => {
//     const [showImage, ShowImage] = useState(true);
//   return (
//     <div>
//             {showImage==true&& <img src ="/vite.svg"/>}
//         <button onClick={()=>{ShowImage(true)}}>show</button>
//         <button onClick={()=>{ShowImage(false)}}>hide</button>
//     </div>
//   )
// }

// export default UseStateImage
const UseStateImage = () => {
    const [showImage, ShowImage] = useState(true);
  return (
    <div>
            {showImage==true&& <img src ="/vite.svg"/>}
        <button onClick={()=>{ShowImage(!showImage)}}>
            {showImage ? 'Hide' : 'Show'}
        </button>
        
    </div>
  )
} 

export default UseStateImage