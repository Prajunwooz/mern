import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Shop the Latest Trends</h1>
          <p>Discover premium products at unbeatable prices.</p>
          <button className="primary-btn">Shop Now</button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">Men</div>
          <div className="category-card">Women</div>
          <div className="category-card">Electronics</div>
          <div className="category-card">Accessories</div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/250" alt="product" />
            <h3>Stylish Jacket</h3>
            <p>$79.99</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/250" alt="product" />
            <h3>Smart Watch</h3>
            <p>$129.99</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/250" alt="product" />
            <h3>Headphones</h3>
            <p>$59.99</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Get 20% Off on Your First Order 🎉</h2>
        <button className="secondary-btn">Sign Up Now</button>
      </section>

    </div>
  );
};

export default Home;
