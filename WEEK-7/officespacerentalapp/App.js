import React from "react";
import "./App.css";

function App() {
  // Single office object
  const office = {
    name: "TechHub Co-Working Space",
    rent: 55000,
    address: "123, MG Road, Bengaluru",
    image: "https://via.placeholder.com/300x200?text=Office+Space"
  };

  // List of office objects
  const officeList = [
    { name: "Startup Space", rent: 45000, address: "Anna Nagar, Chennai" },
    { name: "Corporate Hub", rent: 70000, address: "Banjara Hills, Hyderabad" },
    { name: "BizNest", rent: 60000, address: "Andheri East, Mumbai" }
  ];

  return (
    <div className="App">
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Image */}
      <img src={office.image} alt="Office Space" style={{ width: "300px", borderRadius: "10px" }} />

      {/* Display Single Office Object */}
      <h2>{office.name}</h2>
      <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
        Rent: ₹{office.rent}
      </p>
      <p>{office.address}</p>

      <hr />

      {/* List of offices using map */}
      <h2>Available Office Spaces</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            <h3>{item.name}</h3>
            <p style={{ color: item.rent < 60000 ? "red" : "green" }}>
              Rent: ₹{item.rent}
            </p>
            <p>{item.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

