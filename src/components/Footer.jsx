import React from "react";
import "../styles/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import payment from "../assets/payment.webp";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="newsletter">
          <h3>Stay up to date</h3>
          <p>Subscribe to our newsletter and get 20% discount offer in your first order.</p>
          <div className="email-input">
            <input type="email" placeholder="Enter your email" />
            <button>SUBMIT</button>
          </div>
        </div>

        <div className="contact">
          <h3>Happy to help</h3>
          <p>1279 Thorn Street, NY</p>
          <pi>Phone: 307-549-2480</pi> 
          {/* <FaLinkedin />
          <FaInstagram />
            */}
           
          <p>Mail: demo@gmail.com</p>
          <div className="social-icons">
          <FaFacebook />
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>SHOP</h4>
  
  
          <ul>
            <li>Body Lotion</li>     
 
    
            <li>Computer Gadget</li>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>General</li>
            <li>Shoes</li>
            <li>Sports</li>
            <li>Watch</li>
            <li>Woman Clothes</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Help</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>ABOUT</h4>
          <ul>
            <li>Who We Are</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
        </div>
       

        <div className="footer-column payment">
          <h4>ACCEPT FOR</h4>
          <div className="payment-icon">
           <img src= {payment} alt="payment"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
        
     