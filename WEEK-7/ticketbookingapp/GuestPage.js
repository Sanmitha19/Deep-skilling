import React from "react";

function GuestPage({ onLogin }) {
  const flights = [
    { flight: "AI101", destination: "Delhi", price: 5000 },
    { flight: "AI202", destination: "Mumbai", price: 4500 },
    { flight: "AI303", destination: "Chennai", price: 4800 }
  ];

  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>Browse available flights below:</p>

      <ul>
        {flights.map((f, index) => (
          <li key={index}>
            <strong>{f.flight}</strong> – {f.destination} – ₹{f.price}
          </li>
        ))}
      </ul>

      <button onClick={onLogin}>Login to Book Tickets</button>
    </div>
  );
}

export default GuestPage;
