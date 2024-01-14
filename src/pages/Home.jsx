import React from "react";

import Products from "../components/Products";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

import Hero from "../components/Hero";
import Service from "../components/Service";
import LogoSlider from "../components/LogoSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <LogoSlider />
      <Service />
      <ContactUs />
    </div>
  );
};

export default Home;
