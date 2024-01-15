import React from "react";

import { HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#22485e] py-4">
      <div className="w-[80%] mx-auto flex md:flex-row flex-col gap-8 justify-between ">
        <div className="flex flex-col text-white">
          <p className="text-xl font-semibold">Dancon View Limited</p>
          <p className="w-[232px]">
          Making the world a better place through constructing elegant hierarchies
          </p>
          <div className="flex gap-2 items-center">
            <a
              href="https://instagram.com/turningpointfarmproduce_ke?igshid=MmU2YjMzNjRlOQ=="
              target="_blank"
              rel="noreferrer"
              className="H-[50px] W-[50px] bg-[#FF0000]  flex justify-center items-center"
            >
              <AiOutlineInstagram className="text-white text-3xl p-2" />
            </a>
            <a className="H-[50px] W-[50px] bg-[#FF0000]  flex justify-center items-center">
              <AiOutlineYoutube className="text-white text-3xl p-2" />
            </a>
            <a
              href="https://www.linkedin.com/company/turning-point-farm-produce/"
              target="_blank"
              rel="noreferrer"
              className="H-[50px] W-[50px] bg-[#FF0000]  flex justify-center items-center"
            >
              <AiFillLinkedin className="text-white text-3xl p-2" />
            </a>
          </div>
        </div>
        <div className="flex gap-2 text-white flex-col">
          <p className="text-xl font-semibold">Contact</p>
          <div className="flex gap-2 items-center">
            <HiLocationMarker className="text-[#FF0000] text-3xl p-2" />
            <p className="text-white">Off Bamburi, Mombosa road</p>
          </div>
          <div className="flex gap-2 items-center">
            <AiFillMail className="text-[#FF0000] text-3xl p-2" />
            <p>
           <a className="text-white" href="mailto:info@danconview.com">info@danconview.com</a>
           </p>
          </div>
          <div className="flex gap-2 items-center">
            <IoIosCall className="text-[#FF0000] text-3xl p-2" />
            <p className="text-white">
          <a href="tel:+254114285301"> +254114285301</a>
          </p>
          </div>
        </div>
        <div className="flex gap-2 text-white flex-col">
          <p className="text-xl font-semibold">Quick Links</p>

          <a
            href="#"
            className="hover:text-[#FF0000] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Home
          </a>
          <a
            href="About"
            className="hover:text-[#FF0000] transition-all ease-in-out duration-500 cursor-pointer "
          >
            About Us
          </a>
          <a
            href="Services"
            className="hover:text-[#FF0000] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Services
          </a>
          <a
            href="contact"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Contact Us
          </a>
        </div>
      </div>
      <p className="w-[100%] bg-white h-[2px] my-2"></p>
      <p className="text-center text-white">
         <span>{`Copyright © ${currentYear} DanconView, All rights reserved.`}</span>
        <img src="/Danlogo.png" alt="logo" className="w-24" />
      </p>
    </div>
  );
};

export default Footer;
