import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TweenMax } from 'gsap';
import styles from './Background2.module.css';

const Background2 = () => {
  const containerRef = useRef(null);
  const scene = useRef(new THREE.Scene());
  const camera = useRef(null);
  const renderer = useRef(null);
  const mouse = useRef(new THREE.Vector2());
  const city = useRef(new THREE.Object3D());
  const town = useRef(new THREE.Object3D());
  const smoke = useRef(new THREE.Object3D());
  const uSpeed = useRef(0.001);
  const createCarPos = useRef(true);

  useEffect(() => {
    // Initialize Three.js
    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    
    if (window.innerWidth > 800) {
      renderer.current.shadowMap.enabled = true;
      renderer.current.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    containerRef.current.appendChild(renderer.current.domElement);

    // Camera setup
    camera.current = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.current.position.set(0, 2, 14);

    // Scene setup
    const setcolor = 0xf02050;
    scene.current.background = new THREE.Color(setcolor);
    scene.current.fog = new THREE.Fog(setcolor, 10, 16);

    // Initialize city elements
    const initCity = () => {
      // ... (Original init() function content)
      // [Include the complete init() function logic here]
    };

    // Generate cars
    const generateLines = () => {
      // ... (Original generateLines() content)
      // [Include the complete generateLines() logic here]
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Original animation logic
      city.current.rotation.y -= (mouse.current.x * 8 - camera.current.rotation.y) * uSpeed.current;
      city.current.rotation.x -= (-(mouse.current.y * 2) - camera.current.rotation.x) * uSpeed.current;
      
      // ... (Rest of original animate() logic)

      renderer.current.render(scene.current, camera.current);
    };

    // Event handlers
    const handleResize = () => {
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Set up event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Initial setup
    initCity();
    generateLines();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.current.dispose();
      // Clean up other Three.js objects
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Three.js Canvas */}
      <div ref={containerRef} className={styles.canvas} />
      
      {/* Header */}
      <div className={`${styles.header} fixed top-[42%] w-full ${styles.disableSelection}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col"></div>
            <div className="col-md-6">
              <div className="row">
                <div className="col text-center">
                  <h1 className="text-white font-bold mb-2 relative">
                    Lab City 3D
                  </h1>
                  <p className="text-white/50 text-sm">– Back to the red –</p>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`${styles.footer} fixed bottom-[3%] w-full ${styles.disableSelection}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <h4 className="text-white">Experiment N.3</h4>
              <small className="text-white">
                <a href="https://dribbble.com/victorvergara" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-white/80 transition-colors">
                  dribbble.com/victorvergara
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background2;