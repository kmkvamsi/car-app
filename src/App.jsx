import React from "react";
import Navbar from "./componens/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Buyacar from "./componens/Buyacar";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/buyacar" element={<Buyacar />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
