import React from "react";
import styles from "./Footer.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function Footer() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.footerContainer} ${isDarkMode ? styles.dark : ""}`}
    >
      <footer className={styles.footer}>
        <div className={styles.bubbles}>
          {[...Array(128)].map((_, i) => (
            <div
              key={i}
              className={styles.bubble}
              style={{
                "--size": `${2 + Math.random() * 4}rem`,
                "--distance": `${6 + Math.random() * 4}rem`,
                "--position": `${-5 + Math.random() * 110}%`,
                "--time": `${2 + Math.random() * 2}s`,
                "--delay": `${-1 * (2 + Math.random() * 2)}s`,
              }}
            />
          ))}
        </div>
        <div className={`${styles.content} flex flex-col items-center justify-center h-full`}>
          <div className="text-center">
            <a
              href="https://bluetags.me/lkcp21986520551"
              className={`inline-block text-${isDarkMode ? 'white' : 'gray-900'} 
                font-mono text-4xl transform transition-transform duration-500 
                hover:scale-110 hover:rotate-3`}
            >
              <span className="relative cursor-pointer flex items-center gap-2">
                <MdOutlineLocalPhone className="text-5xl animate-pulse" />
                <span className="inline-block">
                  ContactMe
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 
                    opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300">
                  </span>
                </span>
              </span>

            </a>
          
          </div>
          <div className={styles.content}>
            {/* Contact section */}
           
            
            {/* Copyright text positioned above bubbles */}
            <p className="text-center mt-6 text-xl tracking-wide relative z-10">
              ©2025 karim ahmed ali
            </p>
          </div>
          
       
        </div>
      </footer>
    </div>
  );
}
