import React, { useState } from "react";

function UserPage({ onLogout }) {
  const [bookingMessage, setBookingMessage] = useState("");

  const handleBookTicket = () => {
    setBookingMessage("✅ Your ticket has been booked successfully!");
  };

  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book tickets.</p>

      <button onClick={handleBookTicket}>Book Ticket</button>
      <br /><br />
      {bookingMessage && <p style={{ color: "green" }}>{bookingMessage}</p>}

      <hr />
      <button onClick={onLogout} style={{ backgroundColor: "red", color: "white" }}>
        Logout
      </button>
    </div>
  );
}

export default UserPage;
