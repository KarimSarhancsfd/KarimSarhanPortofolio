import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import styles from './nav.module.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(true);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <div className="flex rounded-2xl justify-between items-center p-10 lg:flex-row relative  min-h-[100px]">
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

        <div>
          <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center">
            <CgNametag />
            AUCODE
          </a>
        </div>

        <div>
          <div className="hidden sm:block lg:block">
            {/* Removed hover:bg-indigo-800 from all navigation links */}
            <a href="#" className={`${styles.navLink} ${styles.effect4} text-white text-xl rounded-full px-5 py-2`}>
              <span className={styles.navSpan}>skills</span>
            </a>
            <a href="#" className={`${styles.navLink} ${styles.effect5} text-white text-xl rounded-full px-5 py-2`}>
              <span className={styles.navSpan}>projects</span>
            </a>
            <a href="#" className={`${styles.navLink} ${styles.effect7} text-white text-xl rounded-full px-5 py-2`}>
                <span className={styles.navSpan}>testimonials</span>
            </a>
          </div>

          <div className="sm:hidden lg:hidden">
            {toggle ? (
              <AiOutlineClose
                onClick={closeMenu}
                size={30}
                className="text-white cursor-pointer "
              />
            ) : (
              <HiMenuAlt1
                onClick={openMenu}
                size={30}
                className="text-white cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between ml-10">
        {toggle ? (
          <div>
            <ul>
              <li className="text-white text-xl mb-2 cursor-pointer">skills</li>
              <li className="text-white text-xl mb-2 cursor-pointer">
                projects
              </li>
              <li className="text-white text-xl mb-2 cursor-pointer">
                testimonials
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Navbar;
