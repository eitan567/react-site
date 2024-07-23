import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoAlgo from '../assets/logo4.png';
import './Header.css';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* <img src={LogoAlgo} alt="logo" className="w-32 sm:w-40 md:w-48" /> */}
          <button
            className="sm:hidden text-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
            <ul className="flex flex-col sm:flex-row-reverse sm:items-center sm:space-x-8 sm:space-x-reverse text-gray-600 font-black text-xl">
              <li className="mb-2 sm:mb-0">
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#425d8d]" : "text-gray-600"}>
                  צור קשר
                </NavLink>
              </li>
              <li className="mb-2 sm:mb-0">
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#425d8d]" : "text-gray-600"}>
                  אודות
                </NavLink>
              </li>
              <li className="mb-2 sm:mb-0">
                <NavLink to="/returns" className={({ isActive }) => isActive ? "text-[#425d8d]" : "text-gray-600"}>
                  תשואות
                </NavLink>
              </li>
              <li className="mb-2 sm:mb-0">
                <NavLink to="/strategy" className={({ isActive }) => isActive ? "text-[#425d8d]" : "text-gray-600"}>
                  אסטרטגיות
                </NavLink>
              </li>
              <li className="mb-2 sm:mb-0">
                <NavLink to="/" end className={({ isActive }) => isActive ? "text-[#425d8d]" : "text-gray-600"}>
                  דף הבית
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;