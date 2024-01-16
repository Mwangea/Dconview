import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Service = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  return (
    <div id="Services" className="  justify-center item-center py-8">
      <section className="p-4 lg:p-8 justify-center item-center dark:bg-gray-800 dark:text-gray-100">
      <p className="text-[#D9D9DD9] text-5xl flex flex-col justify-center items-center font-bold mb-4">Services</p>

      <div className="container mx-auto space-y-12">
        {/* First Feature */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="/portfolio.jpg"
            alt=""
            className="h-80 dark:bg-gray-500 "
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-4xl uppercase dark:text-gray-400 md-4">Portfolio management</span>
            <h3 className="text-2xl font-bold">Service Information:</h3>
            <p className="my-6 dark:text-gray-400">
            We are professionally responsible for making investment decisions and carrying out investment activities on behalf of Eni Kenya B.V,
            our Energy Transition Client. We are currently running the Vegetable Oil Project through Castor farming with smallholder farmers in
             Kilifi and Kwale Counties for future green energy alternatives.
            </p>
            <Link to="/contact">
            <button  type="button" className="bg-[#FF0000] rounded-md self-start mt-4 p-2">
              Enquire More
            </button>
            </Link>
            
          </div>
        </div>

        {/* Second Feature */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/640x480/?2"
            alt=""
            className="h-80 dark:bg-gray-500 "
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-4xl uppercase dark:text-gray-400">Supplies Management</span>
            <h3 className="text-2xl font-bold">Project Information:</h3>
            <p className="my-6 dark:text-gray-400">
            We take on the hustle to identify, acquire and manage key resources and suppplies
             that are essential for running your organisation's operations.
            </p>
            <Link to="/contact">
            <button  type="button" className="bg-[#FF0000] rounded-md self-start mt-4 p-2">
              Enquire More
            </button>
            </Link>
          </div>
        </div>

        {/* Third Feature */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="drill2.jpg"
            alt=""
            className="h-80 dark:bg-gray-500 "
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-4xl uppercase dark:text-gray-400">Water Drilling</span>
            <h3 className="text-2xl font-bold">Construction Services:</h3>
            <p className="my-6 dark:text-gray-400">
            Our affordable specialised tools for drilling water wells from geological formations like clay, 
            water-bearing sandstone and water-bearing gravel are available for hire
            </p>
            <Link to="/contact">
            <button  type="button" className="bg-[#FF0000] rounded-md self-start mt-4 p-2">
              Enquire More
            </button>
            </Link>
          </div>
        </div>
      </div>
      <Link to="/Services">
            <button  type="button" className="bg-black flex flex-col hover:scale-105 transition-all duration-500 ease-in-out
             rounded-md justify-center item-center mt-4 p-2">
              More Services
            </button>
            </Link>
    </section>
 
      </div>
  )
};

export default Service;