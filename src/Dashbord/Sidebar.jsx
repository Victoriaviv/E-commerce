import React from "react";
import "./dashbord_styles/sidebar.css"
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
     <li><FaHome/>   Dashbord</li> 
     <li><MdProductionQuantityLimits/>   products</li>
     <li><TiShoppingCart />   orders</li>
     <li><FaUsers />   customers</li>
     <li>< MdInventory2/>  invetory management</li>
     <li><FaSalesforce/>  sales&report</li>
     <li><MdDiscount/>   Discount&coupons</li>
     <li><IoMdSettings />   setting</li>
     <li><CiLogin/>   logout</li>
     </ul>
    
      
      
     </div>
    )
}
export default Sidebar;