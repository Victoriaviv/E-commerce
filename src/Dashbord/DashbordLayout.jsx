import React from "react";
import Sidebar from "./Sidebar";
import DashbordNavbar from "./DashbordNavbar";
import { Outlet } from "react-router-dom";


function DashbordLayout () {

    return(
<div>
<Sidebar/>
<DashbordNavbar/>

<Outlet/>
</div>
    )
}
export default  DashbordLayout;