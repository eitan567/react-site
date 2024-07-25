import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoAlgo from '../assets/logoAlgo.png';
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
          <div className='sm:hidden flex justify-between items-center w-full'>
            <button
              className="text-gray-600 mobile-menu-button"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
            <img src={LogoAlgo} alt="logo" className="w-32 sm:w-40 md:w-48" />
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} pt-0 lg:block`}>            
            <ul className="flex flex-col sm:flex-row-reverse sm:items-center sm:space-x-8 space-x-reverse text-gray-600 font-black text-xl">
              <li className="mb-2 sm:mb-0">
                <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-[#425d8d] mr-[15px] lg:m-0" : "text-gray-600 mr-[15px] lg:m-0"}>
                  צור קשר
                </NavLink>
              </li>
              <li className="mb-2 sm:mb-0">
                <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-[#425d8d] mr-[15px] lg:m-0" : "text-gray-600 mr-[15px] lg:m-0"}>
                  אודות
                </NavLink>
              </li>
              <li className="mb-2 sm:mb-0">
                <NavLink to="/returns" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-[#425d8d] mr-[15px] lg:m-0" : "text-gray-600 mr-[15px] lg:m-0"}>
                  תשואות
                </NavLink>
              </li>
              <li className="mb-2 sm:mb-0">
                <NavLink to="/strategy" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-[#425d8d] mr-[15px] lg:m-0" : "text-gray-600 mr-[15px] lg:m-0"}>
                  אסטרטגיות
                </NavLink>
              </li>
              <li className="mb-2 sm:mb-0">
                <NavLink to="/" end onClick={toggleMenu} className={({ isActive }) => isActive ? "text-[#425d8d] mr-[15px] lg:m-0" : "text-gray-600 mr-[15px] lg:m-0"}>
                  דף הבית
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <img src={LogoAlgo} alt="logo" className="hidden lg:block absolute left-0 top-[12px] mw-32 sm:w-40 md:w-48" />
    </header>
  );
};

export default Header;