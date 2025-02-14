import React from "react";
import "./dashbord_styles/product.css"
import watch from "../assets/watch.webp"
import sport from "../assets/sport.webp"
import electronics from "../assets/electronics.webp"
import lotion from "../assets/lotion.webp"
import women from "../assets/women.webp"
import gadget from "../assets/gadget.webp"

function Product(){
    const products = [
        {image: watch ,product: "Watch", date: "10may ,2024", price: "$654", stock: 100, status: "published"  },
        {image: sport, product: "Sports", date: "05 dec ,2024", price: "$654", stock: 75, status: "published" },
        {image: electronics, product: "Electronics", date: "10 january,2025", price: "$654", stock: 57, status: "published" },
        {image: lotion, product: "Lotion", date: "10 february,2025", price: "$654", stock: 125, status: "draft" },
        {image: women, product: "women", date: "10 february,2025", price: "$234", stock: 50, status: "draft" },
        { image: gadget,product: "gadget", date: "10 february,2025", price: "$454", stock: 25, status: "draft" },
      ];
 return(
<div>
<div className="productheader">
        <input type="text" placeholder="Find Product" className="searc-input" />
        <select className="filter-dropdown">
          <option>All</option>
        </select>
        
      </div>
      
<div className="recent-products">
  
        <h3>Recent products</h3>
        <table>
          <thead>
            <tr>
              <th>product</th>
              <th>created At</th>
              <th>Price</th>
              <th>stock</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((order, index) => (
              <tr key={index}>
                <td> <img src={order.image}/>{order.product}</td>
                
                <td className="product-info">
                 
                  {order.date}
                </td>
                <td>{order.price}</td>
                <td><div className="stock">{order.stock}</div></td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
</div>
 )   
}
export default Product