import React from "react";
import Navbar from "./componens/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Buyacar from "./componens/Buyacar";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Payment from "./Pages/Payment";

function App() {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/buyacar" element={<Buyacar />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          
        </Routes>
      
    </>
  );
}

export default App;
