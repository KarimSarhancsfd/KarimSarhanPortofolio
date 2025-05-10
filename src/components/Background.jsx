import React from 'react';
import styles from './background.module.css';

const COLORS = [
  '#4facfe', '#00f2fe', '#00cdac', 
  '#a6c1ee', '#f093fb', '#f5576c',
  '#f093fb', '#f5576c', '#ff5858'
];

const SHAPES = [
  '50%', '30% 70% 30% 70% / 60% 40% 60% 40%',
  '60% 40% 60% 40% / 30% 70% 30% 70%',
  '100% 0% 100% 0% / 100% 100% 0% 0%'
];

const Background = () => {
  const getRandomProperty = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  return (
    <div className={styles.background}>
      {[...Array(100)].map((_, i) => {
        const size = Math.random() * 10 + 2;
        return (
          <div 
            key={i}
            className={styles.particle}
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--size': `${size}px`,
              '--duration': `${Math.random() * 20 + 10}s`,
              '--delay': `${Math.random() * 5}s`,
              '--depth': `${Math.random() * 10}`,
              '--opacity': `${Math.random() * 0.6 + 0.2}`,
              '--color': getRandomProperty(COLORS),
              '--shape': getRandomProperty(SHAPES),
              '--glow': getRandomProperty(COLORS)
            }}
          />
        );
      })}
    </div>
  );
};

export default Background;