import Image from "../Image/Capture2.png";
import { FaLinkedin, FaGithub, FaCode, FaInstagram } from "react-icons/fa"; 
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-black text-white text-center py-10">
            <img 
                src={Image} 
                alt="Profile" 
                className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" 
            />

            <h1 className="text-4xl font-bold">
                I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                <Typewriter
                    words={['Meena Kandasamy', 'web enthusiast', 'Web Developer']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
                </span>
            </h1>

            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                   I'm a passionate web developer dedicated to creating beautiful, functional web experiences through clean code and thoughtful design. Web development is more than just my profession—it's my personal interest and creative outlet. This is the space where I share my detailed work and insights.
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
            
            <div className="mt-6 space-x-4">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
                    <a href="#project">Explore My Projects</a> 
                </button>
            </div>
        </div>
    );
}