 
 
import React from 'react';
import styles from './Footer.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MdOutlineLocalPhone } from "react-icons/md";

export default function Footer() {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`${styles.footerContainer} ${isDarkMode ? styles.dark : ''}`}>
      <footer className={styles.footer}>
        <div className={styles.bubbles}>
          {[...Array(128)].map((_, i) => (
            <div 
              key={i}
              className={styles.bubble}
              style={{
                '--size': `${2 + Math.random() * 4}rem`,
                '--distance': `${6 + Math.random() * 4}rem`,
                '--position': `${-5 + Math.random() * 110}%`,
                '--time': `${2 + Math.random() * 2}s`,
                '--delay': `${-1 * (2 + Math.random() * 2)}s`
              }}
            />
          ))}
        </div>
        <div className={styles.content}>
        <div className="relative group">
            <a href="https://bluetags.me/lkcp21986520551" className={`text-${isDarkMode ? 'white' : 'gray-900'} font-mono text-3xl tracking-wider flex items-center transform transition-transform duration-500 hover:scale-110 hover:rotate-3`}>
              <MdOutlineLocalPhone className="mr-2 transform transition-transform duration-500 group-hover:rotate-12" />
              <span className="relative cursor-pointer">
                ContactMe
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
              </span>
            </a>
          </div>
            <div className={styles.image}></div>
            <p>©2025 karim ahmed ali </p>
          </div>
      </footer>
    </div>
    );
}
 