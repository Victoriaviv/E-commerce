// import React from "react";
// import "../styles/shop.css"
// import water from "../assets/water.webp";
// import alexa from "../assets/alexa.webp";
// import headset from "../assets/headset.webp";
// import { CgMenuGridO } from "react-icons/cg";
// import { TfiMenuAlt } from "react-icons/tfi";
// import { IoStarSharp } from "react-icons/io5";
// import { FaRegCircle } from "react-icons/fa";
// const Shop = () => {
 
//     const products = [
//       { name: 'All in One Bottle', price: '$22.00 – $55.00', image: water.webp},
//       { name: 'Amazon Alexa', price: '$49.00 – $69.00', image: alexa.webp },
//       { name: 'Headset Gamer Legion', price: '$22.00 – $55.00', image:  headset.webp }
//   ];


//   return (
//     <>
//     <div className="shop-page">
//       <h1>Shop</h1>
//     </div>
//     <div className="shop-bar">
//     <p1>Showing 1–9 of 13 results</p1>
//     <select className="defoult">
//           <option>Defoult sorting</option>
//           <option>sort by popularity</option>
//           <option>sort by average rating</option>
//           <option>sort by latest</option>
//           <option>sort by price:high to low</option>
//           <option>sort by price:low to high</option>
//         </select>
//         <TfiMenuAlt className="mini" />
//         <CgMenuGridO className="men"/>
//     </div>
   
//     <div class="categories">

//         <h2>Categories</h2>
       
//         <ul>
//             <li>Body Lotion (1)</li>
//             <li>Computer Gadget (3)</li>
//             <li>Electronics (5)</li>
//             <li>Fashion (3)</li>
//             <li>General (1)</li>
//             <li>Shoes (2)</li>
//             <li>Sports (3)</li>
//             <li>Watch (1)</li>
//             <li>Woman Clothes (3)</li>
//         </ul>
       
//     </div>
//    <div className="products_container">
//         {products.map((product) => (
//           <div key={product.id} className="product_card">
//             <img src={products.image} alt={product.name} />
          
            
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
            

//             <div className="star">
//               {[...Array(5)].map((_, i) => (
//                 <IoStarSharp key={i} style={{ color: i < product.rating ? "gold" : "grey",fontSize:"30px" }} />
//               ))}
//             </div>
//             <div className="moon">
//     <FaRegCircle className="moon-icon1" />
//     <FaRegCircle className="moon-icon2" />
//     <FaRegCircle className="moon-icon3" />
//     <FaRegCircle className="moon-icon4" />
    

//     </div>
   
//           </div>
//         ))}
//       </div>

    
//     </>
    
//   );
// };

// export default Shop;

import React, { useState } from 'react';
import '../styles/shop.css';
import lotion from '../assets/lotion.webp';
import alexa from '../assets/alexa.webp'
import headset from '../assets/headset.webp'
import water from "../assets/water.webp";
import gadget from '../assets/gadget.webp'
import electronics from '../assets/electronics.webp'
import sport from '../assets/sport.webp'
import watch from '../assets/watch.webp'
import women from '../assets/women.webp'
import shoppage from "../assets/shoppage.webp"

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  
  const products = [
    { id: 1,name: "All In One Bottle",price: { min: 22.00, max: 35.00 },rating: 3,colors: ["#A27A5C", "#BFB9A6","silver", "white"],image: lotion },
    {id: 2,name: "Amazon Alexa", price: { min: 149.00, max: 149.00 }, rating: 5, colors: ["arsenic", "chamoisee","silver", "white"], image: alexa },
    {id: 3,name: "Headset Gamer Legion",price: { min: 22.00, max: 55.00 },rating: 5,colors: ["black", "gray", "white"],image: headset  },
    {id: 4,name: "Headset Gamer Legion plus",price: { min: 22.00, max: 55.00 },rating: 5,colors: ["#A27A5C", "#BFB9A6","silver", "white"],image: women },
    {id: 4,name: "JDoe's Styling Watch",price: { min: 22.00, max: 33.00 },rating: 5,colors: ["arsenic", "silver"],image: watch  },
    {id: 4,name: "Jessi Cam Recorder",price: { min: 22.00, max: 555.00 },rating: 5,colors: ["arsenic", "chamoisee","silver", "white"],image: sport  },
    {id: 4,name: "Mouse Raxer 3000DPI",price: { min: 22.00, max: 55.00 },rating: 4,colors: ["black", "gray", "white"],image: electronics },
    {id: 4,name: "John Sport Shoes",price: { min: 22.00, max: 165.00 },rating: 4,colors: ["#A27A5C", "gray", "white"],image: gadget },
    {id: 4,name: "Santa Monica Facial Cream",price: { min: 22.00, max: 165.00 },rating: 4,colors: ["black", "gray", "white"],image: water },
  ];

  const categories = [
    { name: "BodyLotion", count: 1 },
    { name: "Computer mouse", count: 1 },
    { name: "Electronics", count: 2 },
    { name: "Fashion", count: 3 },
    { name: "Games", count: 1 },
    { name: "Shoes", count: 2 },
    { name: "Sport", count: 1 },
    { name: "Women Clothes", count: 1 },
  ];

  return (
    <div className="shop-container">
      {/* Hero Section */}
      <div className="shop-hero">
        <h1>Shop</h1>
        <img src={shoppage} alt='shoppage'/>
      </div>

      <div className="shop-content">
        {/* Sidebar */}
        <div className="shop-sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((category) => (
                <li key={category.name}>
                  {category.name} ({category.count})
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Color</h3>
            <div className="color-filters">
              <span className="color-filter" style={{backgroundColor: "#A27A5C"}}></span>
              <span className="color-filter" style={{backgroundColor: "#BFB9A6"}}></span>
              <span className="color-filter" style={{backgroundColor: "gray"}}></span>
              <span className="color-filter" style={{backgroundColor: "white"}}></span>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Rating</h3>
            <div className="rating-filters">
              <div className="rating-option">★★★★★ (5)</div>
              <div className="rating-option">★★★★☆ (4)</div>
              <div className="rating-option">★★★☆☆ (3)</div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Price</h3>
            <div className="price-range">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              />
              <div className="price-inputs">
                <input type="number" value={priceRange[0]} readOnly />
                <input type="number" value={priceRange[1]} readOnly />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-section">
          <div className="product-header">
            <p>Showing 1-6 of 14 results</p>
            <select className="sort-select">
              <option>Default sorting</option>
              <option>Sort by Popularity</option>
              <option>Sort by average rating</option>
              <option>Sort by Latest</option>
              <option>Price: low to high</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <div className="product-price">
                  ${product.price.min.toFixed(2)} - ${product.price.max.toFixed(2)}
                </div>
                <div className="product-rating">
                  {"★".repeat(product.rating)}{"☆".repeat(5-product.rating)}
                </div>
                <div className="product-colors">
                  {product.colors.map((color) => (
                    <span 
                      key={color} 
                      className="color-dot"
                      style={{backgroundColor: color}}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <span className="active">1</span>
            <span>2</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;