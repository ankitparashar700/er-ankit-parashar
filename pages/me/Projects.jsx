import React from "react";
import imaggal from "../../public/assets/images/projects/imageGal.png";
import Link from "next/link";
function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "React Weather App",
      description:
        "A weather app built with React that displays the current weather and 5-day forecast for any location using the OpenWeather API.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/7ba585161415993.Y3JvcCwxMzgwLDEwODAsMjU5LDA.png",
      demo: "/weather",
      // code: "https://github.com/your-username/react-weather-app",
    },
   ];
  return (
    <section id="projects">
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

function ProjectCard({ project }) {
  const imagesrc = project?.image?.src || project.image;
  return (
    <Link href={project.demo} target="_self" rel="noopener noreferrer">
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img
        src={imagesrc}
        alt={project.title}
        className=" w-full object-cover h-50"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700">{project.description}</p>
        <div className="flex mt-4">
          <a
            href={project.demo}
            // target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 transition-all duration-300"
          >
            Demo
          </a>
          {/* <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-all duration-300"
          >
            Code
          </a> */}
        </div>
      </div>
    </div>
    </Link>
  );
}
