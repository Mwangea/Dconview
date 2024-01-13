import React from "react";

const About = () => {
  return (
    <div>
      <img src="/shortbg.png" className="w-[100%] h-[240px]" />
      <div className="w-[80%] py-8 mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between  w-[100%">
          <div className="md:w-[48%] flex flex-col gap-4">
            <p className="text-[#076C05] font-semibold text-2xl">About Us</p>
            <p className="text-[#626262] text-xl">
              Turning Point Farm Produce is Kenya’s premier grower and exporter
              of fresh vegetables and fruits. Our journey began with a simple
              yet powerful mission: to empower our communities in Kenya and
              provide the world with fresh, high-quality produce. With a deep
              commitment to both, we've grown into being a household name in the
              industry. For years, we've cultivated the land with dedication,
              focusing on haricots, herbs, and chilies. Our farms are
              strategically spread across diverse regions of Kenya, ensuring a
              steady supply of premium produce year-round. Our roots are firmly
              planted in the communities we serve. We invest in both the land
              and the people, knowing that sustainable farming not only brings
              prosperity but also strengthens bonds. Turning Point Farm Produce
              is a catalyst for growth, fostering a sense of community wherever
              we operate. We leave nothing to chance when it comes to the
              quality and safety of our produce. Each haricot, every herb, and
              all our fresh produce undergo meticulous care and adhere to the
              highest food safety standards. Our farms and all processes are
              proudly certified by the Horticultural Crops Directorate (HCD),
              the Kenya Plant Health Inspectorate Services (KEPHIS), and hold
              global GAP certifications, ensuring that our products meet
              regulatory standards.
            </p>
          </div>
          <div className="md:w-[48%]">
            <img
              src="/about.svg"
              className="w-[100%] h-[500px] object-contain"
            />
          </div>
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
