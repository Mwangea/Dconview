import React from "react";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div id="about" className="bg-white py-8">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between  w-[100%">
          <div className="md:w-[48%] flex flex-col gap-4">
            <p className="text-[#1a3353] font-semibold text-2xl">About Us</p>
            <p className="text-[#626262] text-xl">
              Our Vision is to be the leading Energy Transition Partner in Africa.Dancon View Limited is keen to engage with small-holder
               farmers in the whole agriculture life-cycle as well as the value chain post production.
               In this regard we would need to promote Good Agricultural Practices (GAP).
               <Link to="/About" className="text-[#1a3353] font-semibold">
                Read More
              </Link>
            </p>
            <p className="text-[#1a3353] font-semibold text-2xl">
              Why Choose Us?
            </p>
            <div className="flex flex-col gap-0">
              <div className="md:w-[80%] w-[100%] h-[100px] bg-[#22485e] py-2  px-4 flex justify-between items-center">
                <div className="flex flex-col text-center justify-center items-center text-white">
                <p className="text-white font-bold">4895</p>
                  <p>Farmers Enrolled</p>
                </div> 
                <div className="flex flex-col text-center justify-center items-center text-white">
                  <p className="text-white font-bold">85</p> 
                  <p>Projects</p> 
                </div> 
                <div className="flex flex-col text-center justify-center items-center text-white">
                  <p className="text-white font-bold">5</p>
                  <p>Years of experience</p> 
                </div>
                <div className="flex flex-col text-center justify-center items-center text-white">
                  <p className="text-white font-bold">9785</p>
                  <p>Acres planted</p> 
                </div>
              </div>
              <div className="md:w-[80%] w-[100%] h-[10px] bg-[#1a3353] " />
            </div>
          </div>
          <div className="mf:w-[48%]">
            <img
              src="/about.svg"
              className="w-[100%] h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
