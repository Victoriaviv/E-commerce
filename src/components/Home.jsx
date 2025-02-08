
import React from "react";
import lotion from "../assets/lotion.webp";
import gadget from "../assets/gadget.webp";
import sport from "../assets/sport.webp";
import watch from "../assets/watch.webp";
import women from "../assets/women.webp";
import water from"../assets/water.webp";
import alexa from"../assets/alexa.webp";
import headset from "../assets/headset.webp";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineHomeWork } from "react-icons/md";
import instagram1 from "../assets/instagram1.webp";
import instagram2 from "../assets/instagram2.webp";
import instagram3 from "../assets/instagram3.webp";
import instagram4 from "../assets/instagram4.webp";
import instagram5 from "../assets/instagram5.webp";
import { Link, useNavigate } from "react-router-dom";

export const categories = [
  { name: "Body Lotion", image: lotion },
  { name: "Sports", image: gadget },
  { name: "Computer Gadgets", image: sport },
  { name: "Watch", image: watch },
  { name: "Women Clothes", image: women },
];

export const products = [
  {id:1, name: "All In One Bottle", price: "$22.00 - $55.00", image: water, rating: 3, colors: ["#8B7D6B", "#D9D9D9", "#FFFFFF"] },
  {id:2, name: "Amazon Alexa", price: "$49.00 - $69.00", image: alexa, rating: 5, colors: ["#BEB7A4", "#FFFFFF"] },
  {id:3, name: "Headset Gamer Legion", price: "$22.00 - $55.00", image: headset, rating: 4, colors: ["#8B7D6B", "#D9D9D9", "#FFFFFF"] },
];

export const vendors = [
  { name: "SantaMonica's Store", location: "New York, NY", image: image1},
  { name: "Josh Doe's Store", location: "New York, NY", image: image2 },
  { name: "Digital Good's Store", location: "New York, NY", image: image3 },
];
const Home = () => {

  
  const navigation = useNavigate();

  const handleNavigate = (id) => {
      navigation(`/singlecard/${id}`)
  }
 

  return (
    <div className="Home">
      <div className="content">
        <div className="left_content">
          <ul>
            <li>Electronics</li>
            <li>Computer Science</li>
            <li>Fashion</li>
            <li>Body Location</li>
            <li>Sport</li>
            <li>Women Clothes</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>

        <div className="right_content">
          <h2>
            Explore our latest and <br /> greatest electronics
          </h2>
          <div className="butto">
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>

      <br />
      <h1>Popular Categories</h1>
      <div className="image_container">
        {categories.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} style={{ width: "200px", height: "200px", padding: "15px", margin: "20px" }} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      <br />
      <h1>New Arrival Products</h1>
      <div className="products_container">
        {products.map((product) => (
          <div key={product.id} className="product_card">
            <img src={product.image} alt={product.name} />
          
             <button className="view" onClick={()=>handleNavigate(product.id)}>view</button>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            

            <div className="star">
              {[...Array(5)].map((_, i) => (
                <IoStarSharp key={i} style={{ color: i < product.rating ? "gold" : "grey",fontSize:"30px" }} />
              ))}
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

      <div className="butto">
        <button>SHOP NOW</button>
      </div>

      <br />
      <h1>Our Vendor List</h1>
      
      <div className="vendor_container">
        {vendors.map((vendor, index) => (
          <div key={index} className="vendor_card">
            <img src={vendor.image} alt={vendor.name} />
            <div></div>
            <h3>{vendor.name}</h3>
            <p>{vendor.location}</p>
            
            <FaChevronCircleRight className="arrow" />
            
           
          </div>
        ))}
        

      
      </div>
      <div className="butto">
        <button>SEE ALL VENDORS</button>
      </div>
      <h1>Why people choose us</h1>
 <div className="us">
  <div>
 <GoArrowSwitch className="goarrow" /><br/>
 <p1>Easy return</p1><br/>
 <p2>our return policy is simple and tahs why<br/>
    customer love our shop </p2>
 </div>
 <div>
 <CiDeliveryTruck className="truck" /><br/>
 <p1>Easy return</p1><br/>
 <p2>our return policy is simple and tahs why<br/>
     customer love our shop </p2>
 </div>
 <div>
 <MdOutlineHomeWork className="home" /><br/>
 <p1>Easy return</p1><br/>
 <p2>our return policy is simple and tahs why<br/>
     customer love our shop </p2>
 </div>
 </div>
 
 <div className="New">
     <p>Explore our products</p>
     </div>
<div className="container">
   <div className="container1">
    <img src={water} alt="water"/>
    <p1>All in one bottle</p1>
    <p2>$22.00-$55.00</p2>
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
<div className="container2">
    <img src={alexa} alt="alexa"/>
    <p1>Amazon Alexa</p1>
    <p2>$49.00-$69.00</p2>
    <div className="star">
    <IoStarSharp className="search-icon1"/>
    <IoStarSharp className="search-icon1"/>
    <IoStarSharp className="search-icon1"/>
    <IoStarSharp className="search-icon1"/>
    <IoStarSharp className="search-icon1"/>
    </div>
    <div className="moon">
    <FaRegCircle className="moon-icon3" />
    <FaRegCircle className="moon-icon4" />

    </div>
</div>
<div className="container3">
  <img src={headset} alt="headset"/>
  <p1>Headset Gamer Legion </p1>
  <p2>$22.00-$55.00</p2>
  <div className="star">
  <IoStarSharp className="search-icon1"/>
  <IoStarSharp className="search-icon1"/>
  <IoStarSharp className="search-icon1"/>
  <IoStarSharp className="search-icon1"/>
  <IoStarSharp className="search-icon2"/>
  </div>
  <div className="moon">
  <FaRegCircle className="moon-icon1" />
  <FaRegCircle className="moon-icon2" />
  <FaRegCircle className="moon-icon3" />
  <FaRegCircle className="moon-icon4" />

  </div>
</div>
</div>
 <button className="buy">view all products</button> 
 <h1>follow us on @instagram</h1>
<div className="follow">
  
  <img src={instagram1} alt="instagram1"/>
  <img  src={instagram2} alt="instagram2"/>
  <img  src={instagram3} alt="instagram3"/>
  <img  src={instagram4} alt="instagram4"/>
  <img  src={instagram5} alt="instagram5"/>

  
</div>

  

 
     </div>
   
    
    
  );
  
};


export default Home;
