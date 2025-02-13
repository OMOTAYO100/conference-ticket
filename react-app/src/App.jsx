import React, { useState } from "react";
import Form from "./components/form";
import Ticket from "./components/ticket";
import "./App.css";

const App = () => {
  const [ticket, setTicket] = useState(null);

  return (
    <div className="container">
      <h1>Conference Ticket Generator</h1>
      <Form setTicket={setTicket} />
      <Ticket ticket={ticket} />
    </div>
  );
};

export default App;
