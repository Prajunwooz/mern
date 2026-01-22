import React from 'react'
import { NavLink } from 'react-router-dom'
 
// return ma bhako matra execute hunxa
// we use {} to write javascript code in react jsx
const Store = () => {
    const Storedata = [
    {id:1, name:"cellular phone", price:30000, description:"A smartphone with advanced features", link:"https://www.datocms-assets.com/27942/1644488867-galaxy-s22-series-2-scaled.jpg"},
    {id:2, name:"laptop", price:200000, description:"A high-performance laptop for work and gaming", link:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell/dell-15-intel-3530/media-gallery/laptop-dell-dc15250nt-sl-metal-usbc-full-function-fpr-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1371&qlt=100,1&resMode=sharp2&size=1371,804&chrss=full"},
    {id:3, name:"tablet", price:300000, description:"A portable tablet for entertainment and productivity", link:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell/dell-15-intel-3530/media-gallery/laptop-dell-dc15250nt-sl-metal-usbc-full-function-fpr-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1371&qlt=100,1&resMode=sharp2&size=1371,804&chrss=full"},
    ]
    // we can write html code inside return only
  return (
    <div> 
{
    Storedata.map((value,index)=>(
        <div key={index} > 
            {value.id} is the id of the product {value.name} and its price is {value.price} .
            <br></br>
            Description : {value.description}
            <br></br>
            <img src={value.link} width={"200px"} height={"150px"} ></img>
            <hr></hr>
        </div>
    ))
}
    </div>
  )
}

export default Store