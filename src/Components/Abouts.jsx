import  Image from "../Image/Capture2.png"
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiMaterialui ,SiTypescript,SiReactquery } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-black text-white py-10" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-14">
        <h2 className="text-4xl text-center font-bold  mb-7">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-32">
        <div className="flex flex-wrap justify-center md:justify-center gap-4 md-8 md:mb-0 md:w-1/4">
  {[
    { icon: <FaReact size={40} color="#61DBFB" />, name: "React" },
  { icon: <FaJsSquare size={40} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <FaHtml5 size={40} color="#E44D26" />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} color="#264DE4" />, name: "CSS3" },
  { icon: <SiTailwindcss size={40} color="#38BDF8" />, name: "Tailwind" },
  { icon: <SiTypescript size={40} color="#3178C6" />, name: "TypeScript" },
  { icon: <SiReactquery size={40} color="#FF4154" />, name: "TanStack Query" },  // Tailwind Blue
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
   <div className="flex-1 space-y-8">

  <p className="text-lg leading-relaxed">
    <span className="block text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">
      Front-End Developer – 2 Years Experience
    </span>
    Skilled in building responsive and dynamic web applications using <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React.js</strong>, and <strong>Git</strong>.<br />
    Experienced in managing server state and API calls using <strong>TanStack Query (React Query)</strong> for highly performant and maintainable applications.<br />
    Proficient in integrating <strong>RESTful APIs</strong> and optimizing user interfaces to ensure fast performance and smooth user experience.
  </p>

  <div>
    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2 text-center md:text-left">
      Frontend Development Intern – InspireClean Energy (3 Months)
    </h3>
    <p className="text-lg leading-relaxed">
      Developed responsive web interfaces using <strong>React.js</strong>, <strong>JavaScript</strong>, <strong>CSS</strong>, and <strong>TypeScript</strong>, while integrating RESTful APIs for enhanced interactivity.<br />
      Collaborated with a cross-functional team to deliver real-time energy monitoring dashboards, improving data visualization and usability.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2 text-center md:text-left">
      Frontend Developer – InspireClean Energy (2+ Years)
    </h3>
    <p className="text-lg leading-relaxed">
      Currently developing scalable, responsive applications using <strong>React.js</strong>, <strong>TypeScript</strong>, and <strong>TanStack Query</strong> for efficient API management.<br />
      Spearheading the optimization of real-time dashboards for energy monitoring, enhancing UI/UX and performance across devices.
    </p>
  </div>

</div>


      
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;