import React from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

import "./dashbord_styles/Dashbordview.css";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
];

const linedata = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
  { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
  { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
  { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
  { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
  { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' },
];

const Dashbordview = () => {
  const boxes = [
    { id: 1, title: "customers", value: 1200 },
    { id: 2, title: "Sales", value: 300 },
    { id: 3, title: "Revenue", value: "$5000" },
    { id: 4, title: "Orders", value: 150 },
  ];

  const style = {
    top: '50%',
    left: '50%',
    lineHeight: '30px',
    color: '#666',
  };

  return (
    <>
      <div className="dashboard">
        <div className="stats-container">
          {boxes.map((box) => (
            <div key={box.id} className="stats-box">
              
              <h3>{box.title}</h3>
              <p>{box.value}</p>
         
            </div>
          ))}
        </div>
      </div>
      
      <div className="dashboard-container">
        <h2 className="dashboard-title">Total spent</h2>
        <div className="chart-wrapper">
          <ResponsiveContainer width="40%" height={400}>
            <BarChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={linedata}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Dashbordview;
