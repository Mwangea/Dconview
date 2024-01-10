import "./App.css";

import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./pages/ScrollToTop";
import Services from "./pages/Services";
import Team from "./pages/Team";

import {Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Team" element={<Team />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
