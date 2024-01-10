//import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => { 
  return (
    <div className='w-[100%] z-10  bg-[#22485e]'>
      <div className="md:w-[80%] mx-auto md:flex hidden justify-between">
         <div className="w-[50%] flex items-center gap-2 border-r-[1px] border-[#927A7A]">
          {" "}
          <HiLocationMarker className="text-[#FF0000]"/>
          <p className="text-white"> Off Bamburi, Mombasa road</p>
         </div>
         <div className="w-[30%] flex gap-2 items-center border-r-[1px] px-2 border-[]#927A7A">
          <AiFillMail className="text-[#FF0000]" />
          <p>
           <a className="text-white" href="mailto:info@danconview.com">info@danconview.com</a>
           </p>
         </div>
         <div className="w-[20%] flex gap-2 items-center px-2">
          <IoIosCall className="text-[#FF0000]" />
          <p>
          <a className="text-white" href="tel:+254721635301">+254721635301</a>
          </p>
         </div>
      </div>
      <p className="bg-[rgb(146,122,122)] h-[1px] w-[100%]" />
       <div className="py-4 md:w-[80%] w-[95%]  flex justify-between items-center mx-auto">
        <Link 
        to="/"
        className="flex md:gap-2 items-center font-semibold text-2xl">
          <img src="/Danlogo.png" alt="logo" className="w-20"/>
        </Link>
        <div className="gap-4 md:flex hidden text-white items-center">
          <Link to="/"
          className="hover:text-[#FF0000] transition-all ease-in-out duration-500 cursor-pointer"
          >
          Home
          </Link>
          <Link to="/About"
          className="hover:text-[#FF0000] transition-all ease-in-out duration-500 cursor-pointer"
          >
          About
          </Link>
          <Link to="/Services"
          className="hover:text-[#FF0000] transition-all ease-in-out duration-500 cursor-pointer"
          >
          Services
          </Link>
          <Link to="/Team"
          className="hover:text-[#FF0000] transition-all ease-in-out duration-500 cursor-pointer"
          >
          Team
          </Link>
          <Link to="/Contact"
          className="hover:text-[#FF0000] transition-all ease-in-out duration-500 cursor-pointer"
          >
          Contact
          </Link>
        </div>
       </div>
    </div>
  )
}

export default Navbar;