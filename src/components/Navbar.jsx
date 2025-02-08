import React from "react";
import "../styles/Navbar.css"
import { useState } from "react";
// import Modelform from "./Modelform";
import { FaSearch, FaUser, FaShoppingCart, FaHeart, FaPhoneAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Outlet, Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import Login from "./Login";
import { IoCloseSharp } from "react-icons/io5";

function Navbar(){
  
const [modal,setModal] = useState(false);

const changeModal = () => {
  setModal(!modal)
}



  return (
  
 
<div className="main">
  {modal && <Login changeModal = {changeModal}/>}

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
        <CiUser  className="icon"onClick={changeModal} />
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
    <button className="categories-button">Trending Categories ▼</button>
      <div className="nav-links">
       
      
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Vendors">Vendors</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Contact">Contact</Link>
        <IoCloseSharp className="uu"/>
       {/* <button onClick={changeModal}>Login</button> */}
      </div>
     

      <div className="contact-info">
        <FaPhoneAlt />
        <span>800-123-4567</span>
        
        <CgMenuGridO className="uuu"/>
      </div>
    </nav>
   
  </header>
    
     
</div>
 
   
  );
};

export default Navbar;
