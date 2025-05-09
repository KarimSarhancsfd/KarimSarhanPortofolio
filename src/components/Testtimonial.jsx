// src/components/Testimonial.jsx
import React from 'react';
import t1 from '../assets/test1.png';
import t2 from '../assets/test2.png';
import t3 from '../assets/test3.png';
import t4 from '../assets/test4.png';
import styles from './Testtimonial.module.css';

export default function Testimonial() {
  return (
    <div className={styles.carousel} mask='true'>
      <article>
        <img src={t1} alt="John Doe" />
      </article>
      <article>
        <img src={t2} alt="Jane Smith" />
      </article>
      <article>
        <img src={t3} alt="Mike Johnson" />
      </article>
      <article>
        <img src={t4} alt="Sarah Williams" />
      </article>
    </div>
  );
}
