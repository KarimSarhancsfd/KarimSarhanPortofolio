import React, { useMemo, useState, useEffect } from 'react';
import styles from './background3d.module.css';

const Background3d = () => {
  // Move hooks INSIDE the component body
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const particles = useMemo(() => Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 + '%',
    y: Math.random() * 100 + '%',
    delay: Math.random() * 5,
    duration: Math.random() * 12 + 5,
    size: Math.random() * 15 + 5,
    shape: Math.floor(Math.random() * 12),
    speed: Math.random() * 0.5 + 0.3
  })), []);

  const stars = useMemo(() => Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 + '%',
    y: Math.random() * 100 + '%',
    size: Math.random() * 3 + 1,
    dx: Math.random() * 0.8 + 0.2,
    dy: Math.random() * 0.8 + 0.2,
    speed: Math.random() * 40 + 20
  })), []);

  // In the particle style:
  // style={{
  //   '--dx': particle.dx,
  //   '--dy': particle.dy,
  //   animationDuration: `${particle.speed}s`,
  //   animationDelay: `${Math.random() * 15}s`
  // }}

  return (
    <div className={styles.cosmicContainer}>
      {/* Nebula Background Layer */}
      <div className={styles.nebula} />
      
      {/* Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className={styles.shootingStar}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`
          }}
        />
      ))}

      {/* Stars with optimized twinkling */}
      {stars.map(star => (
        <div
          key={`star-${star.id}`}
          className={styles.star}
          style={{
            left: star.x,
            top: star.y,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.twinkle}s infinite alternate`
          }}
        />
      ))}
      
      {/* Dynamic Particles */}
      {particles.map(p => (
        <div
          key={`p-${p.id}`}
          className={`${styles.particle} ${styles[`shape${p.shape}`]}`}
          style={{
            left: p.x,
            top: p.y,
            '--dx': p.dx,
            '--dy': p.dy,
            animation: `float ${p.duration}s ${p.delay}s infinite linear`,
            animationDuration: `${p.speed}s`,
            animationDelay: `${Math.random() * 15}s`,
            width: p.size,
            height: p.size,
            filter: `blur(${Math.round(p.size/8)}px)`
          }}
        />
      ))}
    </div>
  );
};

const Background3dalt = () => {
  const baseParticles = useMemo(() => Array.from({ length: 200 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.2 + 0.1,
    opacity: Math.random() * 0.7 + 0.3
  })), []);

  const complexParticles = useMemo(() => Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight * 1.2,
    size: Math.random() * 4 + 2,
    speed: Math.random() * 0.15 + 0.05,
    opacity: Math.random() * 0.5 + 0.2
  })), []);

  return (
    <div className={styles.cosmicContainer}>
      {/* Base Star Layer */}
      {baseParticles.map(p => (
        <div
          key={`base-${p.id}`}
          className={styles.starParticle}
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `drift ${(1/p.speed)*20}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}

      {/* Enhanced Star Layer */}
      {complexParticles.map(p => (
        <div
          key={`enhanced-${p.id}`}
          className={styles.starParticle}
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `
              float ${p.speed * 30}s linear infinite,
              pulse ${Math.random() * 5 + 3}s ease-in-out infinite
            `,
            boxShadow: `0 0 ${p.size * 2}px rgba(255, 255, 255, ${p.opacity})`
          }}
        />
      ))}
    </div>
  );
};

export default Background3d;

// Add resize handler
useEffect(() => {
  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };
  
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
