import React from "react";
// import { Link } from 'react-router-dom'
import logo from "../assets/logo1.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#f5f5f5] w-full font-Inter pt-4">
      <div className="pt-5 max-w-[1150px] m-auto py-16 px-5">
        <div className="md:flex justify-between flex-wrap lg:flex-nowrap">
          <div className="flex-1 mr-20">
            <img src={logo} alt="/" />
            <div className="py-4">
              <h2 className="font-bold py-4 font-Roboto text-l">
                NorthSTVR | LOOK TO THE STARS
              </h2>
              <p className="font-Inter text-sm">
                Fine Lifestyle Accessories With Down To Earth Aesthetics. To do
                our designs justice we source quality materials that are
                assembled by select artisans into bags, footwear, small leather
                goods, clothes and other wears.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="font-thin text-4xl">_</h2>
            <ul className="py-4 font-Inter">
              <li className="py-1 cursor-pointer hover:text-[#A93030]">
                About
              </li>
              <li className="py-1 cursor-pointer hover:text-[#A93030]">FAQ</li>
              <li className="py-1 cursor-pointer hover:text-[#A93030]">
                Contact
              </li>
              <li className="py-1 cursor-pointer hover:text-[#A93030]">
                Terms of service
              </li>
              <li className="py-1 cursor-pointer hover:text-[#A93030]">
                Login
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h2 className="font-thin text-4xl">_</h2>
            <p className="font-Inter text-sm py-4">
              First published 2022. Redesigned often. All rights reserved. ©2023
              NorthSTVR.
            </p>
            <div className="flex py-4 text-[#A93030]">
              <AiOutlineInstagram className="cursor-pointer" size={25} />
              <FaTwitter className="ml-[5rem] cursor-pointer" size={25} />
              <FaFacebookF className="ml-[5rem] cursor-pointer" size={25} />
              <FaGithub className="ml-[5rem] cursor-pointer" size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-center bg-[#A93030] py-4 text-[#f5f5f5] font-Inter">
        &copy;2023. Built with 🖤 by Chef Abbey👨🏾‍🍳
      </div>
    </div>
  );
};

export default Footer;
