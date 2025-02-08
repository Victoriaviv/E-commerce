import React from "react";
import { useParams } from "react-router-dom";
import { productlist } from "./Homepage";
import "../styles/Singlepage.css"
import { IoStarSharp } from "react-icons/io5";
function Singlepage(){
    const { id } = useParams();
    console.log("productlist",id);

    
    const card = productlist.find((card) =>card.id == id);

    return(
        <div className="card">
          <div><img src={card.image}/></div> 
          {/* <div className="crd">{card.cardTitle} </div> */}
          <div className="contenti">
          <p1>All In One Bottle</p1>
          <div className="stars">
    <IoStarSharp className="search-icon1"/>
    <IoStarSharp className="search-icon1"/>
    <IoStarSharp className="search-icon1"/>
    <IoStarSharp className="search-icon2"/>
    <IoStarSharp className="search-icon2"/>
    (1 customer review)
    </div>

<p2>$22.00 – $55.00</p2><br/>

<p3>Lorem ipsum dolor sit amet,<br/>
    consectetur adipiscing elit.<br/>
    Quisque dignissim auctor quam nec dapibus.<br/>
    Etiam pulvinar lectus lorem,<br/>
    vel condimentum felis tincidunt eget.<br/>
    Curabitur sem nisl, porta rutrum molestie quis,<br/>
    blandit vitae nisl. Orci varius natoque penatibus <br/>
    et magnis dis parturient montes, nascetur ridiculus mus.<br/></p3>

Color	

          </div>
             </div>
    )
}
export default Singlepage