
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import baseUrl from "../config/env";
const MyProducts = () => {
  const [products, setProducts] = useState([]);

  console.log(products)
  //we get products from database and store in products state  we put products in array because we get multiple products from database
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}/product/getAll`);
console.log(baseUrl)
        setProducts(response.data.date || []);//1st data is from response and 2nd date is from backend controller where we send response with data key and in that we send products array so we access it with response.data.data
     console.log(response.data.data)
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);

  const handleClick = productId => {
    navigate(`/dashboard/UpdateProduct/${productId}`);//this navigate to update product page and we pass productId in url to identify which product we want to update and in update product page we will get that id from url and use it to fetch that product details and show in form for update
  };

  const handleDelete = async productId => {
    console.log(productId);
    try {
      const response = await axios.delete(
        `${baseUrl}/product/delete/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      alert("Product deleted successfully!");
      setProducts(prevProducts =>
        prevProducts.filter(product => product._id !== productId),
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="get-product">
      <h1 className="page-title">Our Collection</h1>

      {products.length === 0 ? (
        <p className="loading-text">No products</p>
      ) : (
        <div className="product-grid">
          {products.map((value, index) => (
            //now value will store all data of product like name, price, details etc and we can access them using value.productName, value.price etc
            //index will find index of each product in products array and we use it as key because we get multiple products from database and we need to give unique key to each product to avoid warning in console
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
                <p>In Stock: {value.quantity} pcs. </p>
                <p className="product-details">{value.productDetails}</p>
                <div className="price-action-row">
                  <p className="product-price">Rs. {value.price}</p>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(value._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="buy-button"
                    onClick={() => handleClick(value._id)}
                  >
                    Edit
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

export default MyProducts;
