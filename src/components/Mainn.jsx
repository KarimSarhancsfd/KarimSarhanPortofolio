import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import styles from './mainn.module.css'
import SliderComponent from './SliderComponent'
import Project from './Project'
import Testtimonial from './Testtimonial'
import Footer from './Footer'


function Mainn() {
  return (
    <div className='bg-indigo-400 rounded-2xl relative min-h-screen'> 
      {/* Existing bubbles */}
      <div className={styles.bubbles}>
        <div className={styles.bubble} style={{"--position": "5%", "--size": "2rem", "--time": "6s", "--delay": "0.5s"}}>K</div>
        <div className={styles.bubble} style={{"--position": "12%", "--size": "3.5rem", "--time": "7s", "--delay": "1s"}}>A</div>
        <div className={styles.bubble} style={{"--position": "20%", "--size": "2.8rem", "--time": "8s", "--delay": "1.5s"}}>R</div>
        <div className={styles.bubble} style={{"--position": "30%", "--size": "4.2rem", "--time": "6.5s", "--delay": "2s"}}>I</div>
        <div className={styles.bubble} style={{"--position": "38%", "--size": "2.4rem", "--time": "7.5s", "--delay": "2.5s"}}>M</div>
        <div className={styles.bubble} style={{"--position": "45%", "--size": "3.8rem", "--time": "8.5s", "--delay": "3s"}}>S</div>
        <div className={styles.bubble} style={{"--position": "55%", "--size": "2.6rem", "--time": "6s", "--delay": "3.5s"}}>A</div>
        <div className={styles.bubble} style={{"--position": "62%", "--size": "3.2rem", "--time": "7s", "--delay": "4s"}}>R</div>
        <div className={styles.bubble} style={{"--position": "70%", "--size": "2.9rem", "--time": "8s", "--delay": "4.5s"}}>H</div>
        <div className={styles.bubble} style={{"--position": "80%", "--size": "3.7rem", "--time": "6.5s", "--delay": "5s"}}>A</div>
        <div className={styles.bubble} style={{"--position": "88%", "--size": "2.3rem", "--time": "7.5s", "--delay": "5.5s"}}>N</div>
        <div className={styles.bubble} style={{"--position": "100% ", "--size": "4rem", "--time": "8.5s", "--delay": "6s"}} >SOFTWARE-ENGNEER</div>
        {/* Second wave of bubbles */}
        <div className={styles.bubble} style={{"--position": "8%", "--size": "2.5rem", "--time": "7s", "--delay": "6.5s"}}></div>
        <div className={styles.bubble} style={{"--position": "15%", "--size": "3.3rem", "--time": "8s", "--delay": "7s"}}></div>
        <div className={styles.bubble} style={{"--position": "25%", "--size": "2.7rem", "--time": "6.5s", "--delay": "7.5s"}}></div>
        <div className={styles.bubble} style={{"--position": "35%", "--size": "3.9rem", "--time": "7.5s", "--delay": "8s"}}></div>
        <div className={styles.bubble} style={{"--position": "42%", "--size": "2.2rem", "--time": "8.5s", "--delay": "8.5s"}}></div>
        <div className={styles.bubble} style={{"--position": "50%", "--size": "3.4rem", "--time": "6s", "--delay": "9s"}}></div>
        <div className={styles.bubble} style={{"--position": "60%", "--size": "2.8rem", "--time": "7s", "--delay": "9.5s"}}></div>
        <div className={styles.bubble} style={{"--position": "75%", "--size": "3.6rem", "--time": "8s", "--delay": "10s"}}></div>
      </div>
      
      {/* New triangle effect */}
      <div className={styles.triangleContainer}>
        {/* Left side triangles */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={`left-${i}`} 
            className={styles.triangleLeft} 
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
        
        {/* Right side triangles */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={`right-${i}`} 
            className={styles.triangleRight} 
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>
        <Navbar/>
        <Hero/>
        <hr />
        <SliderComponent/>
        <hr />
        <Project/>
     <Testtimonial/>
     <Footer/>
    </div>
    
  )
}

export default Mainn
