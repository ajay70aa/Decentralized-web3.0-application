import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classProps }) => (
  <li className={`mx-4 cursor-pointer text-gray-200 hover:text-gray-400 ${classProps}`}>
    {title}
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>

      {/* Desktop Menu */}
      <ul className="text-gray-200 md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="flex relative">
        <button 
          className="md:hidden text-gray-200 cursor-pointer"
          aria-label="Toggle Menu"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? <AiOutlineClose fontSize={28} className="text-gray-200" /> : <HiMenuAlt4 fontSize={28} className="text-gray-200" />}
        </button>

        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl 
            md:hidden list-none flex flex-col justify-start items-end 
            rounded-md blue-glassmorphism text-gray-200 animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <button aria-label="Close Menu" onClick={() => setToggleMenu(false)}>
                <AiOutlineClose className="text-gray-200" />
              </button>
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
              <NavBarItem key={item + index} title={item} classProps="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
