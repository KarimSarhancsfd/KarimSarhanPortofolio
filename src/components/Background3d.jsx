import React from "react";
import styles from "./background3d.module.css";

const Background3d = () => (
  <div className={styles.backgroundContainer}>
    <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
      alt="moon"
      className={styles.moonImg}
      draggable={false}
    />
    <div className={styles.stars}></div>
    <div className={styles.twinkling}></div>
    <div className={styles.clouds}></div>
  </div>
);

export default Background3d;