import React from 'react';
import styles from './orb.module.css';

const Orb = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[oklch(12.9%_0.042_264.695)]">
      <div className={styles.orb}></div>
    </div>
  );
};

export default Orb;