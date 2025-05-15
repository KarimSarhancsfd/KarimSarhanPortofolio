import React from 'react';
import styles from './background3d.module.css';

const Background3d = () => {
  const particles = Array.from({ length: 300 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5,
    size: Math.random() * 10 + 5
  }));

  const stars = Array.from({ length: 500 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 1
  }));

  return (
    <div className={styles.background3d}>
      {stars.map(star => (
        <div
          key={`star-${star.id}`}
          className={styles.star}
          style={{
            left: star.x,
            top: star.y,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
      
      {particles.map(particle => (
        <div
          key={`particle-${particle.id}`}
          className={styles.particle3d}
          style={{
            left: particle.x,
            top: particle.y,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
        />
      ))}
    </div>
  );
};

export default Background3d;