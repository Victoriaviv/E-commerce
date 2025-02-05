import React from "react";
import "../styles/shop.css"
import water from "../assets/water.webp";
import alexa from "../assets/alexa.webp";
import headset from "../assets/headset.webp";
import { CgMenuGridO } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
const Shop = () => {
 
    const products = [
      { name: 'All in One Bottle', price: '$22.00 – $55.00', image: water.webp},
      { name: 'Amazon Alexa', price: '$49.00 – $69.00', image: alexa.webp },
      { name: 'Headset Gamer Legion', price: '$22.00 – $55.00', image:  headset.webp }
  ];


  return (
    <>
    <div className="shop-page">
      <h1>Shop</h1>
    </div>
    <div className="shop-bar">
    <p1>Showing 1–9 of 13 results</p1>
    <select className="defoult">
          <option>Defoult sorting</option>
          <option>sort by popularity</option>
          <option>sort by average rating</option>
          <option>sort by latest</option>
          <option>sort by price:high to low</option>
          <option>sort by price:low to high</option>
        </select>
        <TfiMenuAlt className="mini" />
        <CgMenuGridO className="men"/>
    </div>
   
    <div class="categories">

        <h2>Categories</h2>
       
        <ul>
            <li>Body Lotion (1)</li>
            <li>Computer Gadget (3)</li>
            <li>Electronics (5)</li>
            <li>Fashion (3)</li>
            <li>General (1)</li>
            <li>Shoes (2)</li>
            <li>Sports (3)</li>
            <li>Watch (1)</li>
            <li>Woman Clothes (3)</li>
        </ul>
       
    </div>
    <div className="shop-list">
      <div className="shop-container">
        {products.map((shop, index) => (
          <div key={index} className="shop-card">
            <img src={shop.image} alt={shop.name} className="shop-image" />
            <p className="shop-date">{shop.price}</p>
            <h3>{shop.name}</h3>
            <div className="star">
    <IoStarSharp className="search-icon1"/>
    <IoStarSharp className="search-icon1"/>
    <IoStarSharp className="search-icon1"/>
    <IoStarSharp className="search-icon2"/>
    <IoStarSharp className="search-icon2"/>
    </div>
    <div className="moon">
    <FaRegCircle className="moon-icon1" />
    <FaRegCircle className="moon-icon2" />
    <FaRegCircle className="moon-icon3" />
    <FaRegCircle className="moon-icon4" />

    </div>
   
           
          </div>
        ))}
      </div>
      

    </div>
    </>
    
  );
};

export default Shop;