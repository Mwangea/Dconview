//import React from 'react'

const Hero = () => {
  return (
    <div 
     id="Home"
     className="w-[100%] h-[120vh]"
     style={{
      backgroundImage: `url("/hero.jpg")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
     }}
    >
    <div className="h-[100%] w-[100%] bg-black/50 flex flex-col-reverse  justify-start md:gap-24 gap-8 items-center">
        <div className="w-[90%] mx-auto flex flex-col bg-[#22485e] justify-center items-center sm:rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl">
          <div className="p-8 grid md:grid-cols-4">
            <div className="flex gap-1 items-start">
              <img src="/vector.png" 
                className="w-[28px] object-contain h-[34px]"
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">
                  Community Empowerment
                </p>
                <p className="text-xs">
                  To foster economic growth and provide opportunities
                  within the communities we serve.
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-start">
              <img src="/vector.png" 
                className="w-[28px] object-contain h-[34px]"
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">
                  Community Empowerment
                </p>
                <p className="text-xs">
                  To foster economic growth and provide opportunities
                  within the communities we serve.
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-start">
              <img src="/vector.png" 
                className="w-[28px] object-contain h-[34px]"
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">
                  Community Empowerment
                </p>
                <p className="text-xs">
                  To foster economic growth and provide opportunities
                  within the communities we serve.
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-start">
              <img src="/vector.png" 
                className="w-[28px] object-contain h-[34px]"
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">
                  Community Empowerment
                </p>
                <p className="text-xs">
                  To foster economic growth and provide opportunities
                  within the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
    </div>

    </div>
  )
}

export default Hero;