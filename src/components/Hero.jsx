import { BsYoutube, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import HeroPic from "../assets/karim.png";
import styles from './hero2.module.css';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center h-screen px-10 lg:px-20 bg-gradient-to-r from-violet to-violet2 text-white">
      <div className="lg:w-1/3 sm:w-fit">
        <p className="text-4xl mb-5 text-slate-300">I'm</p>
        <h1 className="text-6xl">KIM</h1>
        <hr className="mr-10" />
        <p className="mt-5 mr-10 text-xs text-slate-150  font-sans">
          I’m Karim Sarhan—a recent computer science graduate and passionate
          Full Stack Web Developer. I specialize in building responsive,
          user-centric web applications using React and Vite on the frontend,
          with Node.js powering the backend. My designs are styled with Tailwind
          CSS and handcrafted CSS to ensure pixel-perfect layouts and smooth UX
          on every device. During my studies, I collaborated on several team
          projects—implementing RESTful APIs, optimizing database schemas, and
          integrating third-party services. I thrive on solving complex
          problems, whether it’s reducing load times, architecting scalable
          services, or writing clean, maintainable code. I’m eager to leverage
          my solid foundation in data structures and algorithms, strong
          communication skills, and continuous-learning mindset to bring your
          ideas to life and to grow alongside a forward-thinking team. Let’s
          build something great together!
        </p>
      </div>

      <div className="w-1/3 items-center  sm:w-fit">
        <img
          src={HeroPic}
          className="h-60 w-60   rounded-lg transform transition-transform duration-500 hover:scale-[1.5] hover:rotate-[360deg] hover:skew-x-[20deg] hover:shadow-[0_20px_60px_rgba(255,0,144,1)] hover:brightness-200 hover:contrast-150 hover:rounded-full hover:border-[5px] hover:border-[#ED80E9]"
          alt="Hero"
        />
      </div>

      <div className="ml-5 pl-5">
        <p className="text-4xl mb-4 ">About Me</p>
        <p>let's build quality in programing ad design with our services</p>
        <a href="#" className={`${styles.navLink} ${styles.effect6} text-white text-xl`}>
              <span className={styles.navSpan}>
                <span className={styles.glowText}>ShowMore...</span>
                <span className={styles.particles}></span>
              </span>
            </a>
            <div className="flex  mt-5 space-x-4 cursor-pointer justify-center">
          <BsYoutube 
            size={40}  
            className="border-2 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white rounded-full p-2 transition-all duration-300 ease-in-out transform hover:scale-110"
          />
              <BsLinkedin size={40}
              className="border-2 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white rounded-full p-2 transition-all duration-300 ease-in-out transform hover:scale-110"
              />
              <FaGithub size={40}
              className="border-2 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white rounded-full p-2 transition-all duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
      </div>
    </section>
  );
};

export default Hero;
