import React from "react";
import "./dashbord_styles/dashbordnavbar.css";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import profile from "../assets/profile.jpeg"
function DashbordNavbar () {

    return(
<div className="nav">
<header>
   
<IoIosSearch className="search" />

<div className="dashmenu">
<CiMenuFries className="menu" />
<IoSunnyOutline className="sun"/>
<IoMdNotifications className="notfocaton"/>
<img src={profile} alt="profile"/>
</div>

    </header>

</div>
    )
}
export default DashbordNavbar;