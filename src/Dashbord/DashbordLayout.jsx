import React from "react";
import Sidebar from "./Sidebar";
import DashbordNavbar from "./DashbordNavbar";
import { Outlet } from "react-router-dom";
import Dashbord from "./Dashbord";
import Dashbordview from "./Dashbordview";
function DashbordLayout () {

    return(
<div>
<Sidebar/>
<DashbordNavbar/>
{/* <Dashbordview/> */}
<Outlet/>
</div>
    )
}
export default  DashbordLayout;