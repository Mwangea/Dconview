import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div id="Services" className="   py-8">
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto space-y-12">
        {/* First Feature */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="/mama.jpg"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
            <p className="my-6 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus
              quas, error esse quos.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>

        {/* Second Feature */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/640x480/?2"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
            <p className="my-6 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus
              quas, error esse quos.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>

        {/* Third Feature */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?3"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
            <p className="my-6 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus
              quas, error esse quos.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>
      </div>
    </section>
       
      </div>
  )
};

export default Service;