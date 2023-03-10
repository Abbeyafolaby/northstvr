import React, { useState, useEffect } from "react";
import { BsBag } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
import logomobile from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { FcShop } from "react-icons/fc";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="px-4 mx-auto flex items-center justify-between h-full">
        <div className="md:hidden flex justify-center items-center">
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden z-9 mr-12">
            <AiOutlineMenu size={25} />
          </div>
          <Link to=".">
            <div className="md:hidden">
              <img src={logo} alt="" className="ml-8" />
            </div>
          </Link>
        </div>
        <Link to={"/"}>
          <div className="hidden md:flex">
            <img src={logo} alt="" className="" />
          </div>
        </Link>{" "}
        <div className="flex justify-between items-center">
          <div className="cursor-pointer flex relative">
            <ul className="uppercase space-x-8 hidden md:flex">
              <div className="">
                <VscAccount
                  className="text-2xl"
                  onClick={() => setIsOpen(!isOpen)}
                />
                {isOpen && (
                  <div className="absolute z-10 bg-[#f5f5f5] rounded-lg py-2 px-8 transition-all duration-500 ease-in-out list-none text-[#000] right-20 text-center">
                    <NavLink
                      to="account"
                      className={({ isActive }) => (isActive ? "dot" : " ")}
                    >
                      <li
                        className="py-4 text-sm"
                        onClick={() => setNav(false)}
                      >
                        Account
                      </li>
                    </NavLink>
                    <NavLink
                      to="signin"
                      className={({ isActive }) => (isActive ? "dot" : " ")}
                    >
                      <li
                        className="py-4 text-sm"
                        onClick={() => setNav(false)}
                      >
                        Login
                      </li>
                    </NavLink>
                    <NavLink
                      to="register"
                      className={({ isActive }) => (isActive ? "dot" : " ")}
                    >
                      <li
                        className="py-4 text-sm"
                        onClick={() => setNav(false)}
                      >
                        Create Account
                      </li>
                    </NavLink>
                  </div>
                )}
              </div>
              <Link
                to="products"
              >
                  <FcShop className="text-3xl mr-6" />
              </Link>
            </ul>
            <Link to="cart">
              <BsBag className="text-2xl" />
              <div className="bg-red-500 absolute -right-2 -top-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
                1
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-transparent"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-full sm:w-[60%] md:w-[45%] h-screen p-4 ease-in duration-300 bg-[#f5f5f5]"
              : "fixed left-[-100%] top-0 p-4 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link className="cursor-pointer" to=".">
                <img src={logo} alt="/" onClick={() => setNav(false)} />
              </Link>

              <div onClick={handleNav} className="p-3 cursor-pointer">
                <AiOutlineClose size={25} />
              </div>
            </div>

            <div className="border-b border-slate-300 my-3">
              <p className="w-[85%] md:w-[90%] py-3 uppercase font-Roboto text-sm font-medium">
                Look to the stars
              </p>
            </div>

            <div className="py-8 flex flex-col justify-center items-center text-center font-Inter font-normal">
              <ul className="uppercase">
                <NavLink
                  to="."
                  className={({ isActive }) => (isActive ? "dot" : " ")}
                >
                  <li className="py-4 text-sm" onClick={() => setNav(false)}>
                    Home
                  </li>
                </NavLink>
                <NavLink
                  to="products"
                  className={({ isActive }) => (isActive ? "dot" : " ")}
                >
                  <li className="py-4 text-sm" onClick={() => setNav(false)}>
                    Shop
                  </li>
                </NavLink>
                <NavLink
                  to="account"
                  className={({ isActive }) => (isActive ? "dot" : " ")}
                >
                  <li className="py-4 text-sm" onClick={() => setNav(false)}>
                    Account
                  </li>
                </NavLink>
                <NavLink
                  to="signin"
                  className={({ isActive }) => (isActive ? "dot" : " ")}
                >
                  <li className="py-4 text-sm" onClick={() => setNav(false)}>
                    Login
                  </li>
                </NavLink>
                <NavLink
                  to="register"
                  className={({ isActive }) => (isActive ? "dot" : " ")}
                >
                  <li className="py-4 text-sm" onClick={() => setNav(false)}>
                    Create Account
                  </li>
                </NavLink>
                <NavLink
                  to="cart"
                  className={({ isActive }) => (isActive ? "dot" : " ")}
                >
                  <li className="py-4 text-sm" onClick={() => setNav(false)}>
                    Cart
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
