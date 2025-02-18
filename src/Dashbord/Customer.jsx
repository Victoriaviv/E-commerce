import React from "react";
import "./dashbord_styles/customer.css";

const users = [
  { id: 14, name: "Daniel Wilson", role: "Financial Analyst", location: "Mexico", email: "daniel.wilson@example.com", phone: "+1 555 444 3330", date: "18 Feb 2024", status: "Verified" },
  { id: 13, name: "Olivia Martinez", role: "Human Resources", location: "India", email: "olivia.martinez@example.com", phone: "+1 888 777 6660", date: "05 Jan 2024", status: "Waiting"},
  { id: 12, name: "Benjamin Rodriguez", role: "Operations Manager", location: "Russia", email: "benjamin.rodriguez@example.com", phone: "+1 999 000 1110", date: "28 Dec 2023", status: "Verified"  },
  { id: 11, name: "Ashley Garcia", role: "Accountant", location: "Brazil", email: "ashley.garcia@example.com", phone: "+1 000 111 2220", date: "15 Nov 2023", status: "Waiting" },
  { id: 10, name: "Matthew Miller", role: "Business Analyst", location: "China", email: "matthew.miller@example.com", phone: "+1 912 222 3330", date: "12 Oct 2023", status: "Verified" },
  { id: 9, name: "Jessica Davis", role: "UI/UX Designer", location: "Japan", email: "jessica.davis@example.com", phone: "+1 222 333 4440", date: "29 Sep 2023", status: "Waiting" },
  { id: 8, name: "Christopher Williams", role: "Web Developer", location: "Spain", email: "christopher.williams@example.com", phone: "+1 333 444 5550", date: "18 Aug 2023", status: "Verified" },
];

const Customer = () => {
  return (
    <div className="user-table-container">
      <div className="user-table-header">
        <input type="text" placeholder="Find User" className="search-input" />
        <button className="add-user-button">+ Add User</button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Joining Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <div className="user-info">
                  {/* <img src={user.image} alt={user.name} className="user-avatar" /> */}
                  <div>
                    <strong>{user.name}</strong>
                    <p>{user.role}</p>
                  </div>
                </div>
              </td>
              <td>{user.location}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.date}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
