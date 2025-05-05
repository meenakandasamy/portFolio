import  Image from "../Image/Capture2.png"
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiMaterialui } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-black text-white py-10" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-14">
        <h2 className="text-4xl text-center font-bold  mb-7">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-32">
        <div className="flex flex-wrap justify-center md:justify-center gap-4 md-8 md:mb-0 md:w-1/4">
  {[
    { icon: <FaReact size={40} color="#61DBFB" />, name: "React" },           // React Blue
    { icon: <FaJsSquare size={40} color="#F7DF1E" />, name: "JavaScript" },   // JS Yellow
    { icon: <FaHtml5 size={40} color="#E44D26" />, name: "HTML5" },           // HTML Orange
    { icon: <FaCss3Alt size={40} color="#264DE4" />, name: "CSS3" },          // CSS Blue
    { icon: <SiTailwindcss size={40} color="#38BDF8" />, name: "Tailwind" },  // Tailwind Blue
  ].map(({ icon, name }, index) => (
    <div
      key={index}
      className="p-[2px] rounded-lg bg-gradient-to-tr from-green-400 to-blue-500 hover:scale-105 transition-transform mb-6"
    >
      <div className="p-4 bg-black dark:bg-gray-900 rounded-lg flex flex-col items-center">
        {icon}
        <span className="mt-2 text-sm">{name}</span>
      </div>
    </div>
  ))}
</div>


          <div className="flex-1">
            <p className="text-lg mb-6">
            Front-End Developer with 2 years of experience in building responsive and dynamic web applications using HTML5, CSS3, JavaScript, React.js, and Git. 
            Proficient in integrating RESTful APIs and optimizing user interfaces for improved performance and usability.
            </p>

            <p className="text-lg mb-6">
              <h3 className="text-2xl text-center font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500 mb-3">Frontend Development Intern – InspireClean Energy (3 Months)</h3>
            Worked on building responsive web interfaces using React.js, JavaScript, CSS, and integrated RESTful APIs to enhance user experience.<br/>
            Collaborated with the team to develop and optimize features for real-time energy monitoring dashboards.
            </p>
            <p className="text-lg mb-6">
              <h3 className="text-2xl text-center font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500 mb-3">Frontend Developer – InspireClean Energy (2+ Years)</h3>
           Currently working on developing responsive web interfaces using React.js, JavaScript, CSS, and integrating RESTful APIs to enhance user experience.<br/>
           Collaborated on building and optimizing real-time energy monitoring dashboards, contributing to seamless user interfaces and performance improvements.
            </p>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;