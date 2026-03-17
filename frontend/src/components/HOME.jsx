import React from "react";
import "../App.css";

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="name">live wear</h1>
        <nav>
          <lo-go img src=""></lo-go>
          <ul>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" style={{className:"img" ,backgroundImage: "url('https://img.pptvhd36.com/thumbor/2024/05/03/news-ff3ca5d.jpg')" }}>
        <h2 style={{ color: "white", textShadow: "2px 2px 4px rgba(252, 16, 16, 0.5)"}}>Welcome to live wear </h2>
        <p style={{textShadow:"red"}}>Your one-stop solution for awesome content.</p>
        <button className="cta">Get Started</button>
      </section>

      <footer className="footer">
        <p>© 2026 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
