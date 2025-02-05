
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Blog from "./components/Blog.jsx";
import Shop from "./components/Shop.jsx";
import Vendors from "./components/Vendors.jsx";
import Contact from "./components/Contact.jsx";
import Layout from "./components/Layout.jsx";
import Navbar from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Singlepage from "./components/Singlepage.jsx";


const App = () => {
  return (
  
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" index element={<Home/>} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
          <Route path="vendors" element={<Vendors />} />
           <Route path="contact" element={<Contact />} />
           <Route path="view" element ={<Homepage/>}/>
           <Route path="/singlecard/:id" element={<Singlepage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
