import React, { useState } from 'react';
import { SiHackster } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { path } from 'motion/react-client';
import Home from './Home';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className="navbar w-full shadow-2xl text-xl sticky top-0 bg-white z-50" id='Home'>
      <div className="md:container mx-auto h-12 md:h-14  ">
        <div className="flex items-center justify-between h-full   ">
          {/* Logo Section */}
          <Link to="/">
            <div className="navleft flex items-center gap-5 px-6 cursor-pointer">
              <SiHackster className="scale-175 text-purple-600" />
              <div className='text-base/3 hidden sm:block '>
                <h1>III</h1>
                <span className='text-sm font-bold'>Web Developer</span>
              </div>
            </div></Link>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="navright hidden md:block ">
            <ul className='flex gap-5'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`${activeTab === item.name ? "text-purple-600 font-bold" : "hover:text-purple-400"}`}
                    onClick={() => setActiveTab(item.name)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden px-5">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none "
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when hamburger clicked) */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} 
         text-center transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col space-y-3 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`block px-2 py-1 ${activeTab === item.name ? "text-purple-600 font-bold" : "hover:text-purple-400"}`}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;