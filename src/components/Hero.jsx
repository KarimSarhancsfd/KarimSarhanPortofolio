import { BsYoutube, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import HeroPic from "../assets/karim.png";
import styles from './hero2.module.css';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-5 lg:px-20 py-20 lg:py-0 bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white relative">
      {/* Left Content */}
      <div className="lg:w-1/2 xl:w-1/3 mb-12 lg:mb-0 relative z-10">
        <div className="relative bg-indigo-900/50 rounded-xl p-6 backdrop-blur-lg">
          <div className="absolute inset-0 -z-10">
      
            <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
          </div>
          
          <p className="text-2xl lg:text-4xl mb-3 lg:mb-5 text-slate-300 font-['Share_Tech_Mono']">I'm</p>
          <h1 className={`${styles.glitchText} text-4xl lg:text-6xl font-['Orbitron'] font-bold`} data-text="KIM">
            KIM
          </h1>
          <hr className="mr-4 lg:mr-10 border-t-2 border-white/20 my-4" />
          <p className="text-sm lg:text-base mr-4 lg:mr-10 text-slate-300 font-['Share_Tech_Mono'] relative bg-indigo-900/30 p-4 rounded-lg backdrop-blur-sm">
            <span className={`${styles.crtEffect} relative z-10`}>
              I'm Karim Sarhan—a recent computer science graduate and passionate
              Full Stack Web Developer. I specialize in building responsive,
              user-centric web applications using React and Vite on the frontend,
              with Node.js powering the backend...
            </span>
          </p>
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full lg:w-1/3 mb-12 lg:mb-0 flex justify-center relative z-10">
        <div className="relative group w-48 h-48 lg:w-60 lg:h-60">
          <img
            src={HeroPic}
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-[1.5] group-hover:rotate-[360deg] group-hover:skew-x-[20deg] group-hover:shadow-[0_20px_60px_rgba(255,0,144,1)] group-hover:brightness-200 group-hover:contrast-150 group-hover:rounded-full group-hover:border-[5px] group-hover:border-[#ED80E9]"
            alt="Hero"
          />
        </div>
      </div>

      {/* Right Content - Visible on All Screens */}
      <div className="w-full lg:w-1/4 relative z-10">
        <div className="lg:ml-5 lg:pl-5 lg:border-l-2 lg:border-white/20">
          <h1 className={`${styles.glitchText} text-4xl lg:text-6xl font-['Orbitron'] font-bold mb-4 text-center lg:text-left`} data-text="About Me">
            About Me
          </h1>
          <p className="text-sm lg:text-base mb-4 text-center lg:text-left">Let's build quality in programming and design with our services</p>
          <div className="flex justify-center lg:justify-start">
            <a href="#" className={`${styles.navLink} ${styles.effect6} text-white text-lg`}>
              <span className={styles.navSpan}>
                <span className={styles.glowText}>ShowMore...</span>
                <span className={styles.particles}></span>
              </span>
            </a>
          </div>
          
          {/* Mobile Icons (shown only on mobile) */}
          <div className="lg:hidden flex justify-center mt-8 space-x-6">
            <a 
              href="https://www.youtube.com/@virusslayer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 active:scale-95 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <BsYoutube
                size={32}
                className="border-2 border-indigo-200 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white rounded-full p-1.5 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/karim-sarhan-ceo-virusslayer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 active:scale-95 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <BsLinkedin
                size={32}
                className="border-2 border-indigo-200 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white rounded-full p-1.5 transition-all duration-300"
              />
            </a>
            <a
              href="https://github.com/KarimSarhancsfd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 active:scale-95 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <FaGithub
                size={32}
                className="border-2 border-indigo-200 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white rounded-full p-1.5 transition-all duration-300"
              />
            </a>
          </div>

          {/* Desktop Icons (shown only on desktop) */}
          <div className="hidden lg:flex mt-8 space-x-4 justify-center lg:justify-start">
            <a
              href="https://www.youtube.com/@virusslayer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:-translate-y-1 active:scale-95 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <BsYoutube 
                size={40}  
                className="border-2 border-indigo-200 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white rounded-full p-2 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/karim-sarhan-ceo-virusslayer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:-translate-y-1 active:scale-95 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <BsLinkedin
                size={40}
                className="border-2 border-indigo-200 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white rounded-full p-2 transition-all duration-300"
              />
            </a>
            <a
              href="https://github.com/KarimSarhancsfd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:-translate-y-1 active:scale-95 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <FaGithub
                size={40}
                className="border-2 border-indigo-200 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white rounded-full p-2 transition-all duration-300"
              />
            </a>
          </div>

   
          </div>
        </div>
     
    </section>
  );
};

export default Hero;