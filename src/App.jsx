
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Blog from "./components/Blog.jsx";
import Shop from "./components/Shop.jsx";
import Vendors from "./components/Vendors.jsx";
import Contact from "./components/Contact.jsx";
import Layout from "./components/Layout.jsx";
import Navbar from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Singlepage from "./components/Singlepage.jsx";
import Homeproduct from "./components/Homeproduct.jsx"
import DashbordLayout from "./Dashbord/DashbordLayout.jsx";
import Dashbordview from "./Dashbord/Dashbordview.jsx";
import Order from "./Dashbord/Order.jsx";
import Product from "./Dashbord/Product.jsx";
import Customer from "./Dashbord/Customer.jsx";
import Setting from "./Dashbord/Setting.jsx";
import Logout from "./Dashbord/Logout.jsx";
const App = () => {
  return (
  
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" index element={<Home/>} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
           <Route path="Homeproduct"element={<Homeproduct/>}/>
           <Route path="vendors" element={<Vendors />} />
           <Route path="contact" element={<Contact />} />
           <Route path="view" element ={<Homepage/>}/>
           <Route path="/Homepage" element={<Homepage />} />
           <Route path="/singlecard/:id" element={<Singlepage/>}/>
          
           
        </Route>
        
        <Route path="/"element={<DashbordLayout/>}>
        <Route path="/dashbord"index element={<Dashbordview/>}/>
        <Route path="/Order" element={<Order/>}/>
        <Route path="/Product"element={<Product/>}/>
        <Route path="/Customer"element={<Customer/>}/>
        <Route path="/Setting"element={<Setting/>}/>
        <Route path="/Logout"element={<Logout/>}/>
        </Route>
        
      </Routes>
     
    </BrowserRouter>

  );
};

export default App;
