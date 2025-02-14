import React from "react";
import "./dashbord_styles/order.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import watch from "../assets/watch.webp"
import sport from "../assets/sport.webp"

import lotion from "../assets/lotion.webp"
import women from "../assets/women.webp"

const data1 = [
  {
    name: 'January',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Order(){
  const orders = [
    { id: 1, title: "Total orders", value: 15101 },
    { id: 2, title: "New orders", value:3874 },
    { id: 3, title: "Canceled orders", value: 5000 },
    { id: 4, title: "Delivery orders", value:4784 },
    { id: 5, title: "Pending orders", value:4784 },
    { id: 6, title: "Shipping orders", value:4784 },
  ];


  const recentOrders = [
    { trackingNo: "#JY7685", product: " Watch ", price: "$14", totalOrder: 325, total: "$614",image:watch  },
    { trackingNo: "#JY7685", product: "Lotion", price: "$11", totalOrder: 325, total: "$511",image:lotion },
    { trackingNo: "#JY7685", product: "Women", price: "$54", totalOrder: 57, total: "$717",image:women },
    { trackingNo: "#JY7685", product: "Sport", price: "$44", totalOrder: 125, total: "$810",image:sport }
  ];
    return(
<div>


<div className="recent-orders">
        <h3>Recent Order</h3>
        <table>
          <thead>
            <tr>
              <th>Tracking No</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Total Order</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.trackingNo}</td>
                <td className="product-info">
                  <img src={order.image}/> {order.product} 
                  
                </td>
                <td>{order.price}</td>
                <td><div className="bad">{order.totalOrder}</div></td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total_orders">
        <div className="order-container">
          {orders.map((box) => (
            <div key={box.id} className="order-box">
              
              <h3>{box.title}</h3>
              <p>{box.value}</p>
         
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: "60%", height: "400px",paddingLeft:"950px",marginTop:"-47rem" }}>
      <ResponsiveContainer width="50%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
      </div>
</div>
    )
}
export default Order