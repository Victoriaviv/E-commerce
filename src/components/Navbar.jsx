import React from "react";
import "../styles/Navbar.css"

import { FaSearch, FaUser, FaShoppingCart, FaHeart, FaPhoneAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    

<div className="main">
<header>
    
    <div className="navbar-container">
     
      <h1 className="logo">Botiga</h1>

      
      <div className="search-container">
        <select className="category-select">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home & Garden</option>
        </select>
        <input type="text" placeholder="Search products..." className="search-input" />
        <button className="search-button">
          <FaSearch className="search-icon" />
        </button>
      </div>

      
      <div className="icons-container">
        <CiUser  className="icon" />
        <div className="icon-badge">
          <FaShoppingCart className="icon" />
          <span className="badge">0</span>
        </div>
        <div className="icon-badge">
          <FaHeart className="icon" />
          <span className="badge">0</span>
        </div>
      </div>
    </div>

    
    <nav className="bottom-navbar">
      <div className="nav-links">
        <button className="categories-button">Trending Categories ▼</button>
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Vendors">Vendors</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Contact">Contact</Link>
      </div>
     

      <div className="contact-info">
        <FaPhoneAlt />
        <span>800-123-4567</span>
      </div>
    </nav>
  </header>
    
     
</div>
 
   
  );
};

export default Navbar;
