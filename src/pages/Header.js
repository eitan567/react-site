import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LogoAlgo from '../assets/logoAlgoVibe3.png';
import './Header.css';
import { UserContext } from '../UserContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isFormSubmitted, cookiesAccepted } = useContext(UserContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isReturnsEnabled = isFormSubmitted && cookiesAccepted;

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
            <img src={LogoAlgo} alt="logo" className="w-32" />
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
                {isReturnsEnabled ? (
                  <NavLink 
                    to="/returns" 
                    onClick={toggleMenu} 
                    className={({ isActive }) => 
                      isActive ? "text-[#425d8d] mr-[15px] lg:m-0" : "text-gray-600 mr-[15px] lg:m-0"
                    }
                  >
                    תשואות
                  </NavLink>
                ) : (
                  <span className="text-gray-400 mr-[15px] lg:m-0 cursor-not-allowed">תשואות</span>
                )}
              </li>
              <li className="mb-2 sm:mb-0">
                <NavLink to="/strategy" onClick={toggleMenu} className={({ isActive }) => isActive ? "text-[#425d8d] mr-[15px] lg:m-0" : "text-gray-600 mr-[15px] lg:m-0"}>
                מסחר אלגוריתמי ואסטרטגיות
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
      <img src={LogoAlgo} alt="logo" className="hidden lg:block absolute left-3 top-[9px] w-25 md:w-24 lg:w-32" />
    </header>
  );
};

export default Header;