import React, { useState, useContext,useEffect } from "react";


import { MdOutlineLocalPhone } from "react-icons/md";

import styles from './nav.module.css';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  // Add scrollbar styles based on theme
  useEffect(() => {
    const scrollbarThumb = isDarkMode 
      ? 'linear-gradient(45deg, #ff4500, #ff8c00)'
      : 'linear-gradient(45deg, #00b4db, #0083b0)';
      
    const scrollbarTrack = isDarkMode 
      ? 'linear-gradient(45deg, #292966, #1a1a3d)'
      : 'linear-gradient(45deg, #f0f0f0, #e0e0e0)';

    const style = document.createElement('style');
    style.innerHTML = `
      ::-webkit-scrollbar {
        width: 12px;
        background: transparent;
      }
      ::-webkit-scrollbar-track {
        background: ${scrollbarTrack};
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: ${scrollbarThumb};
        border-radius: 10px;
        border: 2px solid ${isDarkMode ? '#1a1a3d' : '#e0e0e0'};
      }
      ::-webkit-scrollbar-thumb:hover {
        transform: scaleY(1.2) scaleX(1.05);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [isDarkMode]);

  const openMenu = () => setToggle(true);
  const closeMenu = () => setToggle(false);

  return (
    <>
      <div className={`flex rounded-2xl justify-between items-center p-10 lg:flex-row relative min-h-[100px] ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Enhanced Fire Effect Container */}
        <div className={`${styles.navFireContainer} w-full h-full`}>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={styles.navFireParticle}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                width: `${Math.random() * 10 + 6}px`,
                height: `${Math.random() * 10 + 6}px`,
                background: isDarkMode ? 'linear-gradient(to top, #ff4500, #ff8c00, #ffcc00)' : 'linear-gradient(to top, #00b4db, #0083b0, #00b4db)'
              }}
            />
          ))}
        </div>

        {/* Logo with 3D effect */}
        <div className="relative group">
          <a href="https://bluetags.me/lkcp21986520551" className={`text-${isDarkMode ? 'white' : 'black'} font-mono text-3xl tracking-wider flex items-center transform transition-transform duration-500 hover:scale-110 hover:rotate-3`}>
            <MdOutlineLocalPhone className="mr-2 transform transition-transform duration-500 group-hover:rotate-12" />
            <span className="relative cursor-pointer ">
              ContactMe
              <span className=" absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
            </span>
          </a>
        </div>


      <div className={styles.toggleDaynight}>
        <input
          type="checkbox"
          id="toggleDaynight"
          className={styles.toggleCheckbox}
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
        <label className={styles.toggleBtn} htmlFor="toggleDaynight">
          <span className={styles.toggleFeature}></span>
        </label>
      </div>
        {/* Navigation Links */}
        <div>
          <div className="hidden sm:block lg:block">
            <a href="#" className={`${styles.navLink} ${styles.effect4} text-${isDarkMode ? 'white' : 'black'} text-xl rounded-full px-5 py-2 transform transition-transform duration-300 hover:translate-y-1`}>
              <span className={styles.navSpan}>skills</span>
            </a>
            <a href="#" className={`${styles.navLink} ${styles.effect5} text-${isDarkMode ? 'white' : 'black'} text-xl rounded-full px-5 py-2 transform transition-transform duration-300 hover:translate-y-1`}>
              <span className={styles.navSpan}>projects</span>
            </a>
            <a href="#" className={`${styles.navLink} ${styles.effect7} text-${isDarkMode ? 'white' : 'black'} text-xl rounded-full px-5 py-2 transform transition-transform duration-300 hover:translate-y-1`}>
              <span className={styles.navSpan}>testimonials</span>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden lg:hidden">
            <svg 
              className={`${styles.menuIcon} ${toggle ? 'active' : ''} text-${isDarkMode ? 'white' : 'from-black'}`}
              viewBox="0 0 100 100"
              onClick={toggle ? closeMenu : openMenu}
            >
              <path 
                className="topLine"
                d="M 20 20 C 24 20 36 20 50 20 C 64 20 76 20 80 20"
              />
              <path 
                className="middleLine"
                d="M20 50h30h30"
              />
              <path 
                className="bottomLine"
                d="M 20 80 C 24 80 36 80 50 80 C 64 80 76 80 80 80"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className="flex justify-between ml-10">
        {toggle && (
          <div className={`w-full p-4 ${isDarkMode ? 'bg-gray-800' : 'caret-black'} rounded-lg shadow-lg`}>
            <ul className="space-y-3">
              <li className={`text-${isDarkMode ? 'white' : 'via-black'} text-xl mb-2 cursor-pointer hover:pl-4 transition-all duration-300`}>skills</li>
              <li className={`text-${isDarkMode ? 'white' : 'via-black'} text-xl mb-2 cursor-pointer hover:pl-4 transition-all duration-300`}>projects</li>
              <li className={`text-${isDarkMode ? 'white' : 'via-black'} text-xl mb-2 cursor-pointer hover:pl-4 transition-all duration-300`}>testimonials</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
