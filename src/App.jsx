import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./pages/ScrollToTop";
//import Products from "./pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Team from "./pages/Team";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />}/>
          <Route path="/Team" element={<Team />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
