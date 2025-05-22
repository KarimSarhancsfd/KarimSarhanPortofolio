import React from 'react';
import styles from './orb.module.css';

const Orb = () => {
  return (
    <div className={styles.orbContainer}>
      <div className={styles.orb}></div>
    </div>
  );
};

export default Orb;