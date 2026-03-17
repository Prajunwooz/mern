
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import baseUrl from "../config/env";

const  Store = () => {
  const [products, setProducts] = useState([]);//we get products from database and store in products state  we put products in array because we get multiple products from database
  const navigate = useNavigate();
  console.log(products)
  //console.log(products._id)//id is not showing because products is an array and we need to loop through it to get each product details and then we can access id of each product
   products.map((value,)=>{
    console.log(value._id)//now we can access id of each product because we are looping through products array and getting each product details in value and then we can access id of each product with value._id
   console.log(value.price)//we can also access price of each product with value.price
  })
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}/product/getAll`);
        setProducts(response.data.date || []);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);

  const handleClick = (productId, price) => {  // original route was /order/:id but we also want to pass price in url so we change it to /order/:id/?price=${price} and we can access price in order page with useParams hook
    navigate(`/order/${productId}/?price=${price}`);// our main aim is to navigate to order page and pass productId and price in url so that we can use it in order page to fetch that product details and show in order page and also use price for order summary
  }; //we get productId and price from products array and pass it to handleClick function when we click on buy now button and then we navigate to order page with that productId and price in url so that we can use it in order page to fetch that product details and show in order page and also use price for order summary

  return (
    <div className="get-product">
      <h1 className="page-title">Our Collection</h1>

      {products.length === 0 ? (
        <p className="loading-text">Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((value, index) => (
            <div key={index} className="product-card">
              <div className="image-wrapper">
                <img
                  src={value.productImages}
                  alt={value.productName}
                  className="product-image"
                />
              </div>
              <div className="product-content">
                <h3 className="product-name">{value.productName}</h3>
                <p className="product-details">{value.productDetails}</p>
                <div className="price-action-row">
                  <p className="product-price">Rs. {value.price}</p>
                  <button
                    className="buy-button"
                    onClick={() => handleClick(value._id, value.price)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Store;
