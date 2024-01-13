import React from "react";

const Hero = () => {
  return (
    <div
      id="Home"
      className="w-[100%]   h-[110vh]"
      style={{
        backgroundImage: `url("/back1.jpeg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="h-[100%] w-[100%] bg-black/50 flex flex-col-reverse justify-start md:gap-24 gap-8 items-center ">
        <div className=" w-[90%] mx-auto flex flex-col bg-[#22485e]   justify-center items-center sm:rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl">
          <div className="p-8 grid md:grid-cols-4 ">
            <div className="flex gap-1 items-start">
              <img
                src="/vector1.svg"
                className="w-[28px] object-contain h-[34px]"
                style={{ fill: 'red' }}
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">Innovation</p>
                <p className="text-xs">
                  We are dedicated to ongoing learning and improvement, embracing new technologies and processes,
                  while also valuing existing ones. Creative ideas from all stakeholders are highly encouraged.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-start">
              <img
                src="/vector2.svg"
                className="w-[28px] object-contain h-[34px]"
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">Community Empowerment</p>
                <p className="text-xs">
                  To foster economic growth and provide opportunities within the
                  communities we serve.
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-start">
              <img
                src="/vector3.svg"
                className="w-[28px] object-contain h-[34px]"
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">Agility</p>
                <p className="text-xs">
                  We swiftly navigate a dynamic world with vision and flexibility,
                  embracing rapid changes in our industry.Stay tuned for an exciting journey ahead!
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-start">
              <img
                src="/vector4.svg"
                className="w-[28px] object-contain h-[34px]"
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">Customer Focus </p>
                <p className="text-xs">
                  To understand and meet our customer needs by providing
                  exceptional service through meeting their expectation always. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-white md:text-6xl text-5xl text-center md:w-[50%] w-[80%] font-bold">
          Dancon View Limited 
          </p>
          <p className="md:text-4xl text-xl text-white md:w-[50%] w-[80%]  text-center font-semibold">
            Completely covered with a guarantee of complete satisfaction customer assistance.
          </p>
          <a
            href="About"
            className="bg-[#FF0000] hover:scale-105 transition-all duration-500 ease-in-out  mt-4 text-white p-4 rounded-md"
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
