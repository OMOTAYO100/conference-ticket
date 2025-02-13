import React from "react";
const Ticket = ({ ticket }) => {
  if (!ticket) return null;

  return (
    <div className="ticket-container">
      <p className="details">Here is your ticket details:</p>
      <div className="ticket">
        <h2>🎟️ Conference Ticket</h2>
        <p><strong>Name:</strong> {ticket.fullName}</p>
        <p><strong>Email:</strong> {ticket.email}</p>
        <img src={ticket.avatar} alt="Avatar" width="300" />
      </div>
    </div>
  );
};

export default Ticket;
