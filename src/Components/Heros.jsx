import Image from "../Image/Capture2.png";
import { FaLinkedin, FaGithub, FaCode,FaInstagram  } from "react-icons/fa"; 
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";


export default function Hero() {
    return (
        <div className="bg-black text-white text-center py-10">
            <img 
                src={Image} 
                alt="Profile" 
                className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" 
            />

            <h1 className="text-4xl font-bold">
                I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                <Typewriter
    words={['Meena Kandasamy']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={160}
    deleteSpeed={100}
    delaySpeed={2000}
  />
                </span>
                , Front-End Developer
            </h1>

            <p className="mt-4 text-lg text-gray-300">
                I specialize in building modern and responsive web applications
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex justify-center items-center gap-6 text-2xl">
                <a href="https://leetcode.com/u/Meenakandasamy/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <SiLeetcode />
                </a>
                <a href="https://github.com/meenakandasamy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/meena-kandasamy-68085025a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/meena_kandasamy" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
    <FaInstagram />
  </a>
            </div>
            <div className="mt-4 space-x-4">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                  <a href="#project"className="hover :text-gray-400">  Project</a> 
                </button>
                {/* <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                    Resume
                </button> */}
            </div>
          
        </div>
    );
}
