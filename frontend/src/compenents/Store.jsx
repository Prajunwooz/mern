import React from 'react'
import { NavLink } from 'react-router-dom'
 
// return ma bhako matra execute hunxa
// we use {} to write javascript code in react jsx
const Store = () => {
    // const Storedata = [
    // {id:1, name:"cellular phone", price:30000, description:"A smartphone with advanced features", link:"https://www.datocms-assets.com/27942/1644488867-galaxy-s22-series-2-scaled.jpg"},
    // {id:2, name:"laptop", price:200000, description:"A high-performance laptop for work and gaming", link:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell/dell-15-intel-3530/media-gallery/laptop-dell-dc15250nt-sl-metal-usbc-full-function-fpr-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1371&qlt=100,1&resMode=sharp2&size=1371,804&chrss=full"},
    // {id:3, name:"tablet", price:300000, description:"A portable tablet for entertainment and productivity", link:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell/dell-15-intel-3530/media-gallery/laptop-dell-dc15250nt-sl-metal-usbc-full-function-fpr-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1371&qlt=100,1&resMode=sharp2&size=1371,804&chrss=full"},
    // ]
    // we can write html code inside return only
     const Products= [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium noise-canceling wireless headphones with 30-hour battery life",
    price: 199.99,
    category: "Electronics",
    image: "/images/headphones.jpg",
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Leather Backpack",
    description: "Handcrafted genuine leather backpack with laptop compartment",
    price: 149.99,
    category: "Accessories",
    image: "/images/backpack.jpg",
    inStock: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: "Smart Watch",
    description: "Fitness tracker with heart rate monitor and GPS",
    price: 299.99,
    category: "Electronics",
    image: "/images/smartwatch.jpg",
    inStock: false,
    rating: 4.3,
    reviews: 256
  },
  {
    id: 4,
    name: "Running Shoes",
    description: "Lightweight breathable running shoes with cushioned sole",
    price: 89.99,
    category: "Footwear",
    image: "/images/shoes.jpg",
    inStock: true,
    rating: 4.6,
    reviews: 412
  },
  {
    id: 5,
    name: "Coffee Maker",
    description: "Programmable 12-cup coffee maker with thermal carafe",
    price: 79.99,
    category: "Home",
    image: "/images/coffeemaker.jpg",
    inStock: true,
    rating: 4.4,
    reviews: 67
  },
  {
    id: 6,
    name: "Yoga Mat",
    description: "Non-slip eco-friendly yoga mat with carrying strap",
    price: 34.99,
    category: "Fitness",
    image: "/images/yogamat.jpg",
    inStock: true,
    rating: 4.7,
    reviews: 203
  }

, {
    id: 101,
    name: "Wireless Headphones",
    description: "Premium noise-canceling wireless headphones with 30-hour battery life and Hi-Fi sound",
    price: 199.99,
    category: "Electronics",
    image: "/images/headphones.jpg",
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 102,
    name: "Smart Watch Pro",
    description: "Advanced fitness tracker with heart rate monitor, GPS, and always-on display",
    price: 349.99,
    category: "Electronics",
    image: "/images/smartwatch.jpg",
    inStock: true,
    rating: 4.7,
    reviews: 256
  },
  {
    id: 103,
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker with 360-degree sound and 20-hour battery",
    price: 129.99,
    category: "Electronics",
    image: "/images/speaker.jpg",
    inStock: true,
    rating: 4.4,
    reviews: 189
  },
  {
    id: 104,
    name: "Wireless Earbuds",
    description: "True wireless earbuds with active noise cancellation and wireless charging case",
    price: 149.99,
    category: "Electronics",
    image: "/images/earbuds.jpg",
    inStock: true,
    rating: 4.6,
    reviews: 342
  },
  {
    id: 105,
    name: "4K Webcam",
    description: "Ultra HD webcam with auto-focus, built-in microphone, and low-light correction",
    price: 89.99,
    category: "Electronics",
    image: "/images/webcam.jpg",
    inStock: false,
    rating: 4.3,
    reviews: 97
  },
  {
    id: 106,
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with hot-swappable switches and wrist rest",
    price: 159.99,
    category: "Electronics",
    image: "/images/keyboard.jpg",
    inStock: true,
    rating: 4.8,
    reviews: 421
  },
  {
    id: 107,
    name: "Gaming Mouse",
    description: "High-precision gaming mouse with 16000 DPI sensor and programmable buttons",
    price: 79.99,
    category: "Electronics",
    image: "/images/mouse.jpg",
    inStock: true,
    rating: 4.5,
    reviews: 278
  },
  {
    id: 108,
    name: "Portable Power Bank",
    description: "20000mAh fast-charging power bank with USB-C and wireless charging",
    price: 59.99,
    category: "Electronics",
    image: "/images/powerbank.jpg",
    inStock: true,
    rating: 4.4,
    reviews: 156
  },
  {
    id: 109,
    name: "Smart Home Hub",
    description: "Voice-controlled smart home hub compatible with all major smart devices",
    price: 129.99,
    category: "Electronics",
    image: "/images/smarthub.jpg",
    inStock: true,
    rating: 4.2,
    reviews: 203
  },
  {
    id: 110,
    name: "Tablet 10-inch",
    description: "10-inch tablet with Retina display, 128GB storage, and all-day battery life",
    price: 449.99,
    category: "Electronics",
    image: "/images/tablet.jpg",
    inStock: true,
    rating: 4.7,
    reviews: 512
  }
]



  return (
    <div> 
{
    Products.map((value,index)=>(
        <div key={index} > 
            {/* {value.id} is the id of the product {value.name} and its price is {value.price} .
            <br></br>
            Description : {value.description}
            <br></br>
            <img src={value.link} width={"200px"} height={"150px"} ></img>
            <hr></hr> */}
<div className="product-card"></div>
  <img src={value.image} alt={value.name} className="product-image" />
  <div className="product-details">
        </div>
    <h2 className="product-name">{value.name}</h2>
    <p className="product-description">{value.description}</p>
    <p className="product-price">${value.price.toFixed(2)}</p>
    <button className="add-to-cart-button" disabled={!value.inStock}></button>
      {value.inStock ? 'Add to Cart' : 'Out of Stock'}
    
        </div>
    ))
}
    </div>
  )
}

export default Store