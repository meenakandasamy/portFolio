import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiReactquery, SiPostman, SiBootstrap, SiAntdesign } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md"; // Material Design icon for Material UI
import { TbApi } from "react-icons/tb";

const About = () => {
  const skills = [
    { icon: <FaReact size={40} color="#61DBFB" />, name: "React" },
    { icon: <SiTypescript size={40} color="#3178C6" />, name: "TypeScript" },
    { icon: <FaJsSquare size={40} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <MdOutlineDesignServices size={40} color="#007FFF" />, name: "Material UI" }, // Updated this line
    { icon: <FaHtml5 size={40} color="#E44D26" />, name: "HTML5" },
    { icon: <FaCss3Alt size={40} color="#264DE4" />, name: "CSS3" },
    { icon: <SiTailwindcss size={40} color="#38BDF8" />, name: "Tailwind" },
    { icon: <SiReactquery size={40} color="#FF4154" />, name: "TanStack Query" },
    { icon: <FaGitAlt size={40} color="#F05032" />, name: "Git" },
    { icon: <FaGithub size={40} color="#f0f6fc" />, name: "GitHub" },
    { icon: <TbApi size={40} color="#6DB33F" />, name: "REST API" },
    { icon: <SiPostman size={40} color="#FF6C37" />, name: "Postman" },
    { icon: <SiBootstrap size={40} color="#7952B3" />, name: "Bootstrap" },
    { icon: <SiAntdesign size={40} color="#0170FE" />, name: "Ant Design" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-16" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-4xl md:text-5xl text-center font-bold mb-12 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r text-white">
            About Me
          </span>
       
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Skills Grid */}
          <div className="w-full lg:w-2/5">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map(({ icon, name }, index) => (
                <div
                  key={index}
                  className="group relative p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center justify-center p-3">
                    <div className="transform group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                    <span className="mt-2 text-xs sm:text-sm text-center text-gray-300 group-hover:text-white">
                      {name}
                    </span>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-3/5 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-green-400 transition-all transform hover:-translate-y-1 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Frontend Developer @ InspireClean Energy
              </h3>
              <p className="text-sm text-gray-400 mb-4">Full-time | 2+ Years (Including 3-month internship)</p>
              
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">▹</span>
                  <span>
                    <strong>Modern Tech Stack:</strong> Developed responsive web applications using <strong>React, TypeScript, JavaScript</strong> with <strong>TanStack Query</strong> for state management and <strong>Material UI</strong> for design consistency.
                  </span>
                </p>
                
                <p className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">▹</span>
                  <span>
                    <strong>UI/UX Development:</strong> Created polished interfaces using <strong>Material UI, Ant Design, Tailwind CSS, and Bootstrap</strong>, ensuring responsive design across all platforms.
                  </span>
                </p>
                
                <p className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">▹</span>
                  <span>
                    <strong>Performance Optimization:</strong> Improved application performance by 30% through code splitting, lazy loading, and efficient API call management.
                  </span>
                </p>
                
                <p className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">▹</span>
                  <span>
                    <strong>Collaborative Development:</strong> Worked in agile teams with backend developers and designers to implement new features and maintain code quality.
                  </span>
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all transform hover:-translate-y-1 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Frontend</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      React.js (Hooks, Context API)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      TypeScript & JavaScript (ES6+)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      Material UI, Ant Design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      Tailwind CSS, Bootstrap
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Tools & Methods</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      TanStack Query (React Query)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      Git & GitHub
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      RESTful API Integration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      Agile Development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 hover:border-green-400 transition-all group"
              >
                <FaGithub className="mr-2 text-xl group-hover:text-green-400" />
                <span className="font-medium group-hover:text-white">View My GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;