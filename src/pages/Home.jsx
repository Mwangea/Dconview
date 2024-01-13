import React from "react";

import Products from "../components/Products";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

import Hero from "../components/Hero";
import Service from "../components/Service";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Products />
      <Service />
      <ContactUs />
    </div>
  );
};

export default Home;
