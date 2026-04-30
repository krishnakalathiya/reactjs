import React from 'react';
import { Search, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import '../index.css';

const Header = () => {
  return (
    <header className="header-container">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <span className="logo-icon"></span>
            <span className="logo-text">Mantu</span>
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li className="dropdown">
            <a href="#categories">Categories</a>
          </li>
          <li className="dropdown">
            <a href="#products">Products</a>
          </li>
          <li className="dropdown">
            <a href="#pages">Pages</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="icon-btn"></button>
          <button className="icon-btn"></button>
          <button className="icon-btn">
            <Heart size={20} />
            <span className="badge">3</span>
          </button>
          <button className="icon-btn">
            <ShoppingCart size={20} />
            <span className="badge">4</span>
          </button>
        </div>
      </nav>

      {/* Hero / Banner Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="sale-tag">50% Off</div>
          <h1 className="hero-title">Fashion sale <br /> for women's</h1>
          <p className="hero-subtitle">Elevate your every day. Style that speaks volumes.</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        
        <div className="hero-image-container">
          <div className="circle-bg">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Fashion Model" 
              className="hero-model"
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="decor decor-zig-zag"></div>
        <div className="decor decor-plus">+</div>
      </section>
    </header>
  );
};

export default Header;