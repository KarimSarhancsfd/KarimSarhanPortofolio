import React from 'react';
import styles from './background.module.css';

const Background = () => {
  return (
    <div className={styles.background}>
      {/* Geometric pattern elements */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className={styles.shape}
          style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--size': `${Math.random() * 10 + 5}px`,
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${Math.random() * 10 + 5}s`
          }}
        />
      ))}
    </div>
  );
};

export default Background;