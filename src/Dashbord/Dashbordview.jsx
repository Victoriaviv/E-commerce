import React from "react";

import {LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

import "./dashbord_styles/Dashbordview.css";

const data1 = [
  { name: 'January',uv: 4000,pv: 2400,amt: 2400 },
  { name: 'February', uv: 3000, pv: 1398,amt: 2210},
  {name: 'March',uv: 2000,pv: 9800,amt: 2290},
  {name: 'April',uv: 2780,pv: 3908,amt: 2000},
  {name: 'May',uv: 1890,pv: 4800,amt: 2181},
  {name: 'June',uv: 2390,pv: 3800,amt: 2500},
  {name: 'July',uv: 3490,pv: 4300,amt: 2100},
];
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
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
    <div className="dashboard_content">
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
      <div style={{ width: "80%", height: "400px",paddingLeft:"900px",marginTop:"-25rem" }}>
      <ResponsiveContainer width="50%" height="100%">
        <h2>Total spent</h2>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    <div className="radial_chart">
    <h2 className="radial-title">Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart cx="60%" cy="60%" innerRadius="10%" outerRadius="80%" barSize={20} data={linedata}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
        
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
      <div style={{ width: "40%", height: "400px",paddingLeft:"300px",marginTop:"-30rem" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashbordview;
