import React, { useEffect, useRef } from "react";
import styles from "./sunAndStars.module.css";

const STAR_COUNT = 200;

const SunAndStars = () => {
  const starsRef = useRef([]);

  useEffect(() => {
    // Only run once to randomize star positions
    starsRef.current.forEach((star) => {
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * window.innerHeight - 5}px`;
      star.style.left = `${Math.random() * window.innerWidth - 5}px`;
      star.style.boxShadow = `0 0 ${Math.round(Math.random() * 30)}px #fff`;
      star.style.opacity = Math.random() * 0.8 + 0.2;
    });
  }, []);

  return (
    <div className={styles.sunAndStars}>
      <div className={styles.sun} />
      {Array.from({ length: STAR_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (starsRef.current[i] = el)}
          className={styles.star}
        />
      ))}
    </div>
  );
};

export default SunAndStars;
