import React from "react";
import "./dashbord_styles/sidebar.css"
import { Link } from "react-router-dom";
import { FaHome,FaUsers ,FaSalesforce  } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdDiscount, MdInventory2 } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
function Sidebar () {

    return(
<div className="sidebar">
<div className="log">Botiga</div>
<ul>
<li><Link to="/Dashbord"><FaHome/>   Dashbord</Link></li> 
<li><Link to="/Product"><MdProductionQuantityLimits/>products</Link></li> 
<li><Link to="/Order"><TiShoppingCart />Orders</Link></li> 
<li><Link to="/Customer"><FaUsers />   customers</Link></li> 

<li><Link to="/Setting"><IoMdSettings />   setting</Link></li> 
<li><Link to="/Logout"><CiLogin/>   logout</Link></li> 
     </ul>
    
      
      
     </div>
    )
}
export default Sidebar;