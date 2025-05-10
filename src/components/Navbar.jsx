import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import styles from './nav.module.css';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
              }}
            />
          ))}
        </div>

        {/* Logo with 3D effect */}
        <div className="relative group">
          <a href="#" className={`text-${isDarkMode ? 'white' : 'gray-900'} font-mono text-3xl tracking-wider flex items-center transform transition-transform duration-500 hover:scale-110 hover:rotate-3`}>
            <CgNametag className="mr-2 transform transition-transform duration-500 group-hover:rotate-12" />
            <span className="relative">
              AUCODE
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
            </span>
          </a>
        </div>

        


  
      <h2 className="headingOuter">Day/Night Toggle</h2>
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
            <a href="#" className={`${styles.navLink} ${styles.effect4} text-${isDarkMode ? 'white' : 'gray-900'} text-xl rounded-full px-5 py-2 transform transition-transform duration-300 hover:translate-y-1`}>
              <span className={styles.navSpan}>skills</span>
            </a>
            <a href="#" className={`${styles.navLink} ${styles.effect5} text-${isDarkMode ? 'white' : 'gray-900'} text-xl rounded-full px-5 py-2 transform transition-transform duration-300 hover:translate-y-1`}>
              <span className={styles.navSpan}>projects</span>
            </a>
            <a href="#" className={`${styles.navLink} ${styles.effect7} text-${isDarkMode ? 'white' : 'gray-900'} text-xl rounded-full px-5 py-2 transform transition-transform duration-300 hover:translate-y-1`}>
              <span className={styles.navSpan}>testimonials</span>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden lg:hidden">
            <svg 
              className={`${styles.menuIcon} ${toggle ? 'active' : ''} text-${isDarkMode ? 'white' : 'gray-900'}`}
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
          <div className={`w-full p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg`}>
            <ul className="space-y-3">
              <li className={`text-${isDarkMode ? 'white' : 'gray-900'} text-xl mb-2 cursor-pointer hover:pl-4 transition-all duration-300`}>skills</li>
              <li className={`text-${isDarkMode ? 'white' : 'gray-900'} text-xl mb-2 cursor-pointer hover:pl-4 transition-all duration-300`}>projects</li>
              <li className={`text-${isDarkMode ? 'white' : 'gray-900'} text-xl mb-2 cursor-pointer hover:pl-4 transition-all duration-300`}>testimonials</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
