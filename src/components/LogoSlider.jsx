import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
        <Slider {...settings}>
          <div className="mx-auto mt-10">
            <a href="https://www.eni.com/en-IT/eni-worldwide/africa/kenya.html" target="_blank" rel="noopener noreferrer">
              <img className="mx-auto" src="/eni.png" alt="Transistor" width="158" height="48" style={{ maxWidth: '100%' }} />
            </a>
          </div>
          <div className="mx-auto mt-10">
            <a href="https://kilifi.go.ke/22-27/" target="_blank" rel="noopener noreferrer">
              <img className="mx-auto" src="/kilifi.png" alt="Reform" width="158" height="48" style={{ maxWidth: '100%' }} />
            </a>
          </div>
          <div className="mx-auto mt-10">
            <a href="https://kwalecountygov.com/kwale/" target="_blank" rel="noopener noreferrer">
              <img className="mx-auto" src="/Kwale.jpg" alt="Tuple" width="158" height="48" style={{ maxWidth: '50%' }} />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
