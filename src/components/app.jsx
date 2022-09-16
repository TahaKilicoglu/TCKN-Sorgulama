import React from "react";
import Home from "../pages/Home";
import Navbar from "./navbar";
import Modal from "./modal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Contact from "../pages/Contact";
import About from "../pages/About";
import { Routes, Route } from "react-router-dom";


const App = () => {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {isOpen && <Modal />}
    </div>
  );
};

export default App;
