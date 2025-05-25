import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
//import project6 from '../assets/project6.png';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "An activity tracker and calendar with a weather element.",
    image: project1,
    gitlabLink: "https://github.com/zikoraudenze/project1-group09.git",
    deployedApplication: "https://zikoraudenze.github.io/project1-group09/"
  },
  {
    id: 2,
    title: "LiteChat",
    description: "A chatroom that allows users to create an account, sign in, and join a chat room.",
    image: project2,
    gitlabLink: "https://github.com/Hiemdier/LiteChat"
  },
  {
    id: 3,
    title: "Employee Tracker",
    description: "A CLI-based employee tracker that allows users to log, create, and manage employee data using PostgreSQL.",
    image: project3,
    gitlabLink: "https://github.com/reesevan/CLI-Based-Employee-Tracker"
  },
  {
    id: 4,
    title: "README File Generator",
    description: "A Node.js CLI app that prompts the user and generates a customized README.",
    image: project4,
    gitlabLink: "https://github.com/reesevan/Module-07-Challenge"
  },
  {
    id: 5,
    title: "Vehicle Builder",
    description: "A CLI app that allows users to navigate and control a virtual vehicle.",
    image: project5,
    gitlabLink: "https://github.com/reesevan/Module-08-Challenge"
  },
  {
    id: 6,
    title: "React Portfolio",
    description: "A personal portfolio to showcase coding and artwork, built with React.",
    gitlabLink: "https://github.com/reesevan/React-Portfolio"
  }
];

// ✅ Define the Portfolio component here:
const Portfolio = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
      {projects.map(project => (
        <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-2 space-x-2">
              <a
                href={project.gitlabLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitLab Repo
              </a>
              {project.deployedApplication && (
                <a
                  href={project.deployedApplication}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ✅ Now this works!
export default Portfolio;
