import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <img src="/shortbg.png" className="w-[100%] h-[240px]" />
      <div className="container mx-auto">
        <div className="w-[80%] py-8 mx-auto flex flex-col-reverse md:flex-row justify-between">
          <div className="md:w-[48%] flex flex-col gap-4">
            <p className="text-[#076C05] font-semibold text-2xl">About Us</p>
            <p className="text-[#626262] text-xl">
              DVL is keen to engage with small-holder farmers in the whole
              agriculture life-cycle as well as the value chain post production.
              In this regard we would need to promote Good Agricultural
              Practices (GAP). Also we would need to work with communities to
              secure their food security and healthy living by ensuring
              livelihoods. Our intention is to practice climate smart agriculture
              by promoting the use of geo-ICT in crop-husbandry management. Also
              ICT will come in handy in crop management as well as distribution.
            </p>
          </div>
          <div className="md:w-[48%]">
            <img
              src="/about.svg"
              className="w-[100%] h-[500px] object-contain"
            />
          </div>
        </div>

 {/* Tab switcher */}
<div className="mb-4">
  <div className="container mx-auto px-4 sm:px-6  md:px-8">
    <div className="flex">
      <button
        onClick={() => handleTabChange(1)}
        className={`flex-1 py-4 text-xl rounded-md ${
          activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
        } mr-2`}
      >
        Mapping Out Farmers
      </button>
      <button
        onClick={() => handleTabChange(2)}
        className={`flex-1 py-4 text-xl rounded-md ${
          activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'
        } mx-2`}
      >
        Training
      </button>
      <button
        onClick={() => handleTabChange(3)}
        className={`flex-1 py-4 text-xl rounded-md ${
          activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'
        } ml-2`}
      >
        Land Preparation
      </button>
    </div>
  </div>
</div>



        {/* Tab content */}
        <div>
          {activeTab === 1 && (
            <div>
              <p>This is the content for Tab 1.</p>
              <img
                src="https://via.placeholder.com/300"
                alt="Tab 1 Image"
                className="mt-4 flex-1"
              />
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <p>This is the content for Tab 2.</p>
              <img
                src="https://via.placeholder.com/300"
                alt="Tab 2 Image"
                className="mt-4 flex-1"
              />
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <p>This is the content for Tab 3.</p>
              <img
                src="https://via.placeholder.com/300"
                alt="Tab 3 Image"
                className="mt-4 flex-1"
              />
            </div>
          )}
        </div>
      </div>

      
      <div className="w-[80%] py-8 mx-auto">
        <div className="flex flex-col-reverse md:flex-row-reverse justify-between  w-[100%">
          <div className="md:w-[48%] flex flex-col gap-4">
            <p className="text-[#076C05] font-semibold text-2xl">Our Mission</p>
            <div className="flex flex-col gap-2">
              <p className="text-[#076C05] font-semibold text-xl">Mission</p>
              <div className="flex gap-2 items-start">
                <img src="/about1.svg" className="w-[54px] h-[54px]" />
                <p className="text-[#626262]">
                  To empower communities, cultivate exceptional fresh produce,
                  and enrich lives globally through sustainable farming
                  practices.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#076C05] font-semibold text-xl">Vision</p>
              <div className="flex gap-2 items-start">
                <img src="/about2.svg" className="w-[54px] h-[54px]" />
                <p className="text-[#626262]">
                  To be the leading global provider of premium, sustainably
                  grown horticultural products, making a positive impact on
                  communities and the environment.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#076C05] font-semibold text-xl">Values</p>
              <div className="flex gap-2 items-start">
                <img src="/about3.svg" className="w-[54px] h-[54px]" />
                <p className="text-[#626262]">
                  Our commitment to quality, safety, community empowerment,
                  customer focus, and sustainability drives everything we do to
                  deliver exceptional products while fostering economic growth,
                  protecting our planet, and exceeding expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[48%]">
            <img
              src="/aboutimg.svg"
              className="w-[100%] h-[500px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-[80%] py-8 flex flex-col gap-8 items-center justify-center mx-auto">
        <p className="text-[#076C05] font-semibold text-2xl">Global Reach</p>
        <p className="md:w-[80%] w-[90%] text-xl mx-auto text-[#626262]">
          Our commitment to quality knows no borders. We export our produce to
          customers around the world, and our global partners trust us for
          consistent excellence.
        </p>

        <img src="/global.png" className="w-[100%] h-[440px] object-cover" />
      </div>
    </div>
  );
};

export default About;
