import projectimg1 from "../assets/im1.png";
import projectimg2 from "../assets/im2.png";
import projectimg3 from "../assets/im3.png";
import projectimg4 from "../assets/im4.png";
import styles from './project.module.css';

export default function Project() {
  return (
    <div className="bg-indigo-800 m-20 max-w-full">
      <div className="grid justify-items-center m-10">
        <h1 className={`${styles.cyberpunk} ${styles.glitched} text-3xl text-[#f9f002] mt-10`}>
          PROJECTS_
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 p-5">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase track-wide text-sm to-indigo-500 font-semibold">
                Ecommerceapp
              </div>
              <a href="#">Subheading</a>
              <p className="mt-2 text-slate-500 text-sm leading-tight max-w-[240px]">
                I'm Karim Sarhan—your go-to Full-Stack Developer. I build
                seamless web experiences using modern front-end frameworks with
                robust backends. Specializing in React, Node.js, and clean
                architecture, I transform complex requirements into elegant
                solutions that scale.
              </p>
            </div>
            <div className="md:shrink-0 p-5">
              <img
                src={projectimg1}
                className="h-60 w-60 "
                alt=""
                height={150}
                width={150}
              />
            </div>
          </div>
        </div>
        {/* Add more project items here */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className="md:flex">
            <div className="md:shrink-0 p-5">
              <img
                src={projectimg2}
                className="h-60 w-60 "
                alt=""
                height={150}
                width={150}
              />
            </div>
            <div className="p-8">
              <div className="uppercase track-wide text-sm to-indigo-500 font-semibold">
                GreenTech
              </div>
              <a href="#">Subheading</a>
              <p className="mt-2 text-slate-500 text-sm leading-tight max-w-[240px]">
                I'm Karim Sarhan—your go-to Full-Stack Developer. I build
                seamless web experiences using modern front-end frameworks with
                robust backends. Specializing in React, Node.js, and clean
                architecture, I transform complex requirements into elegant
                solutions that scale.
              </p>
            </div>
          </div>
        </div>

      </div>
      <hr />

      <div className="grid grid-cols-2 gap-4 p-5">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase track-wide text-sm to-indigo-500 font-semibold">
                simple todolist
              </div>
              <a href="#">Subheading</a>
              <p className="mt-2 text-slate-500 text-sm leading-tight max-w-[240px]">
                I'm Karim Sarhan—your go-to Full-Stack Developer. I build
                seamless web experiences using modern front-end frameworks with
                robust backends. Specializing in React, Node.js, and clean
                architecture, I transform complex requirements into elegant
                solutions that scale.
              </p>
            </div>
            <div className="md:shrink-0 p-5">
              <img
                src={projectimg3}
                className="h-60 w-60 "
                alt=""
                height={150}
                width={150}
              />
            </div>
          </div>
        </div>
        {/* Add more project items here */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className="md:flex">
            <div className="md:shrink-0 p-5">
              <img
                src={projectimg4}
                className="h-60 w-60 "
                alt=""
                height={150}
                width={150}
              />
            </div>
            <div className="p-8">
              <div className="uppercase track-wide text-sm to-indigo-500 font-semibold">
                simple games apps
              </div>
              <a href="#">Subheading</a>
              <p className="mt-2 text-slate-500 text-sm leading-tight max-w-[240px]">
                I'm Karim Sarhan—your go-to Full-Stack Developer. I build
                seamless web experiences using modern front-end frameworks with
                robust backends. Specializing in React, Node.js, and clean
                architecture, I transform complex requirements into elegant
                solutions that scale.
              </p>
            </div>
          </div>
        </div>
          
      </div>

      
    </div>
  );
}
