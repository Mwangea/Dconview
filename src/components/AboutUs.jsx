import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoSlider from "./LogoSlider";

const AboutUs = () => {
  const [farmersEnrolled, setFarmersEnrolled] = useState(0);
  const [projects, setProjects] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [acresPlanted, setAcresPlanted] = useState(0);

  const maxFarmersEnrolled = 5000; // Set the maximum count for Farmers Enrolled
  const maxProjects = 100; // Set the maximum count for Projects
  const maxYearsOfExperience = 10; // Set the maximum count for Years of Experience
  const maxAcresPlanted = 10000; // Set the maximum count for Acres Planted

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment only if the count is less than the maximum
      if (farmersEnrolled < maxFarmersEnrolled) {
        setFarmersEnrolled((prevCount) => prevCount + 1);
      }

      if (projects < maxProjects) {
        setProjects((prevCount) => prevCount + 1);
      }

      if (yearsOfExperience < maxYearsOfExperience) {
        setYearsOfExperience((prevCount) => prevCount + 1);
      }

      if (acresPlanted < maxAcresPlanted) {
        setAcresPlanted((prevCount) => prevCount + 1);
      }
    }, 10);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [farmersEnrolled, projects, yearsOfExperience, acresPlanted]);

  return (
    <div id="about" className="bg-white py-8">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between w-[100%]">
          <div className="md:w-[48%] flex flex-col gap-4">
            <p className="text-[#1a3353] font-semibold text-2xl">About Us</p>
            <p className="text-[#626262] text-xl">
              Our Vision is to be the leading Energy Transition Partner in Africa.
              Dancon View Limited is keen to engage with small-holder
              farmers in the whole agriculture life-cycle as well as the value chain
              post-production. In this regard, we would need to promote Good
              Agricultural Practices (GAP).
              <Link to="/About" className="text-[#1a3353] font-semibold">
                Read More
              </Link>
            </p>
            <p className="text-[#1a3353] font-semibold text-2xl">
              Why Choose Us?
            </p>
            <div className="flex flex-col gap-0">
              <div className="md:w-[80%] w-[100%] h-[100px] bg-[#22485e] py-2 px-4 flex justify-between items-center">
                <div className="flex flex-col text-center justify-center items-center text-white">
                  <p className="text-white font-bold">{farmersEnrolled}</p>
                  <p>Farmers Enrolled</p>
                </div>
                <div className="flex flex-col text-center justify-center items-center text-white">
                  <p className="text-white font-bold">{projects}</p>
                  <p>Projects</p>
                </div>
                <div className="flex flex-col text-center justify-center items-center text-white">
                  <p className="text-white font-bold">{yearsOfExperience}</p>
                  <p>Years of experience</p>
                </div>
                <div className="flex flex-col text-center justify-center items-center text-white">
                  <p className="text-white font-bold">{acresPlanted}</p>
                  <p>Acres planted</p>
                </div>
              </div>
              <div className="md:w-[80%] w-[100%] h-[10px] bg-[#1a3353]" />
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
