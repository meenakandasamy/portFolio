// import { GitHub } from "@mui/icons-material";
// import coffee from "../Image//coffee.jpeg";
// export default function Projects() {
//     const project =[
//         {
//             id:1,
// image:coffee,
// name:"Coffee Shop ",
// GitHub:"https://github.com/meenakandasamy/portFolio.git"
//         }
//     ]
//   return (
//     <div className="bg-black text-white px-10 Py-40" id="project">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">Projects </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//   {project.map((projects) => (
//     <div
//       key={projects.id}
//       className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
//     >
//       <img src={projects.image} alt={projects.name} className="mb-4" />
//       <h3 className="text-2xl font-bold mb-2">{projects.name}</h3>
//       <p className="text-gray-400 mb-8">{projects.technologies || 'Tech stack here'}</p>
//       <a
//         href={projects.GitHub}
//         className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         GitHub
//       </a>
//     </div>
//   ))}
// </div>

//         </div>
//         </div>
//   )}

import React from "react";
import coffee from "../Image//coffee.jpeg";
const projects = [
  {
                 id:1,
     image:coffee,
  name:"Coffee Shop ",
   github:"https://github.com/meenakandasamy/Meewithcoffee",
   URl:"https://meenakandasamy.github.io/coffee/"
 
         }
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex gap-2">
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500  text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
               <a href={project.URl} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 pl-2 rounded-full" target="_blank" 
              rel="noopener noreferrer"> Mee With Coffee</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;