 
 
import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
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
        <div>
          <div>
            <b>Eldew</b>
            <a href="#">Secuce</a>
            <a href="#">Drupand</a>
            <a href="#">Oceash</a>
            <a href="#">Ugefe</a>
            <a href="#">Babed</a>
          </div>
          <div>
            <b>Spotha</b>
            <a href="#">Miskasa</a>
            <a href="#">Agithe</a>
            <a href="#">Scesha</a>
            <a href="#">Lulle</a>
          </div>
        </div>
        <div>
          <div className={styles.image}></div>
          <p>©2023 Your Company</p>
        </div>
      </div>
    </footer>
  );
}
 