
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import baseUrl from "../config/env";

const UpdateProduct = () => {
  const { id } = useParams(); //id comes from url and we use it to identify which product we want to update and then we will fetch that product details from database and show it in the form for update
  console.log(id);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
    console.log(token)
    console.log("yo chai hamro token ho hai ta", token)
  const [products, setProducts] = useState({ //products comes from database and setProducts is used to set the data in products
    productName: "",// 
    productDetails: "",
    price: "",
    quantity: "",
    category: "",//we put put usestate value as empty string because when we first load the page we want to show the empty form and when we get the data from database then we will set the data in products and show it in the form
    brand: "",
  });
  const [productImages, setProductImages] = useState(null);//productimages comes from database and setProductImages is used to set the data in productimages and we use it to store the image file that we get from dropzone
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${baseUrl}/product/get/${id}`);//this api is used to get the product details from database and we pass the id in url to identify which product we want to get and then we will set the data in products and show it in the form for update
        const data = res.data.data; // Access the product data from the response
        console.log(data);
        if (data) {
          setProducts({
            productName: data.productName || "", //1st data.productName is from database and 2nd "" is default value if data.productName is undefined or null then it will set to empty string
            productDetails: data.productDetails || "",//pr
            price: data.price || "",
            quantity: data?.quantity || "",
            category: data.category || "",
            brand: data.brand || "",
          });
          console.log("yo chai hamro product details ho hai ta", data.quantity);
          setPreview(data.productImage);
        }
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const onDrop = useCallback(files => {
    const file = files[0];
    setProductImages(file);
    setPreview(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    multiple: false,
    onDrop,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setProducts(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async e => {
    e.preventDefault();

    try {
      let imageUrl = preview;
      console.log("yo chai hamro product images ho hai ta", productImages);

      if (productImages) {
        const formData = new FormData();
        formData.append("uploads", productImages);
        //backend ma uploads chai multer ko field name ho, productImage chai frontend ma dropzone bata aako file ho
        const uploadRes = await axios.post(`${baseUrl}/file/upload`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        imageUrl = uploadRes.data.url;
      }

      const updatedData = {
        productName: products.productName,
        productDetails: products.productDetails,
        price: products.price,
        quantity: products.quantity,
        category: products.category,
        brand: products.brand,
        productImage: imageUrl,
      };
      console.log("yo chai hamro updated data ho hai ta", updatedData);

      await axios.patch(`${baseUrl}/product/update/${id}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(token)
      console.log("yo cai hamro updated data ho hai ta", updatedData);

      toast.success("Product updated successfully!");
      setTimeout(() => {
        navigate("/dashboard/GetProduct");
      }, 2000);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to update product.");
    }
  };

  if (loading)
    return <div className="loading-screen">Loading Product Details...</div>;

  return (
    <div className="update-product">
      <div className="form-container">
      <h2 className="form-title" style={{color:"white"}}>Update Product</h2>

        <form onSubmit={handleUpdate} className="update-form">
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              id="productName"
              name="productName"
              type="text"
              className="form-control"
              value={products.productName}
              onChange={handleChange}
              placeholder="Product Name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                className="form-control"
                value={products.price}
                onChange={handleChange}
                placeholder="Price"
                required
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                className="form-control"
                value={products.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="category">Category</label>
              <input
                id="category"
                name="category"
                type="text"
                className="form-control"
                value={products.category}
                onChange={handleChange}
                placeholder="Category"
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                name="brand"
                type="text"
                className="form-control"
                value={products.brand}
                onChange={handleChange}
                placeholder="Brand"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="productDetails">Product Details</label>
            <textarea
              id="productDetails"
              name="productDetails"
              className="form-control textarea"
              value={products.productDetails}
              onChange={handleChange}
              placeholder="Enter product description"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label>Product Image</label>
            <div
              {...getRootProps()}
              className={`dropzone-area ${isDragActive ? "active" : ""}`}
            >
              <input {...getInputProps()} />
              {preview ? (
                <div className="image-preview-container">
                  <img src={preview} alt="Preview" className="image-preview" />
                  <p className="change-image-text">
                    Click or drag to replace image
                  </p>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <p>Drag & drop a new image or click to select</p>
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Save Changes
          </button>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
