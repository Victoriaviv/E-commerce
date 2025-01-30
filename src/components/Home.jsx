
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
import instagram5 from "../assets/instagram5.webp"

const Home = () => {
  
  return (
    <>
        <div>
        <div className="menulist">
        <li>Electronics</li> 
        <li>Computer Gadget</li>
        <li>Fashion</li>
        <li>Body lotion</li>
        <li>sports</li>
        <li>woman clothes</li>
        <li>shoes</li>
        <li>watches</li>
        < div className="menu">
         <p>Explore our latest and<br/>
         greatest electronics</p>
         <button>SHOP NOW</button>
        </div>
        </div>
        <h1>Popular categories</h1>
     
     <div className="items">
     <div >
     <img src={lotion} alt="lotion"></img>
     <p>Body lotion</p>
     </div>
     <div>
     <img src={gadget} alt="gadget"/>
     <p>computer gadget</p>
     </div>
     <div>
     <img src= {sport} alt="sport"/>
     <p>sports</p>
     </div>
     <div>
     <img src= {watch} alt="watch"/>
     <p>watch</p>
     </div>
     <div>
     <img src= {women} alt="women"/>
     <p>woman clothes</p>
     </div>
     </div>
     <div className="New">
     <p>New Arrivaival products</p>
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
 <button className="buy">SHOP NOW</button> 

 <h1>Our Vendor List</h1>
 i
 <div className="vendor">
 <div>
    <img src={image1} alt="image1"/>
    <p1>Santa <br/>
      Monica's <br/>
      Store<FaChevronCircleRight className="arrow" /></p1>
      <p2>New York, NY</p2>
      </div>
      <div>
      <img src={image2} alt="image2"/>
      <p1>Josh Doe's<br/>
        Store<FaChevronCircleRight className="arrow" /></p1>
        <p2>New York, NY</p2>
        </div>
  <div>
      <img src={image3} alt="image3"/>
      <p1>Digital Good's <br/>
        Store<FaChevronCircleRight className="arrow" /></p1>
        <p2>New York, NY</p2>
        </div>
 </div>
 <button className="buy">SEE ALL VENDORS</button> 
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
 <div>i
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
    </>
  );
};

export default Home;
