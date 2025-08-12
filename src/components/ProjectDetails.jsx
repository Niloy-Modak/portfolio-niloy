import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { projectData } from "../components/MyProjects";
import { FaCheckCircle, FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);
  const [mainImage, setMainImage] = useState(project?.images[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="max-w-7xl min-h-[calc(100vh-214px)] mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

      {/* Left: Images */}
      <div className="flex flex-col justify-center">
        {/* Main Image */}
        <div className="border border-white/20 rounded-lg overflow-hidden relative">
          <img
            src={mainImage}
            alt={project.title}
            className="w-full h-auto object-cover transition-opacity duration-500 ease-in-out shadow-2xs"
          />
        </div>

        {/* Thumbnail Images */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3 mt-4 justify-center lg:justify-start">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} ${idx}`}
              className={`w-16 h-16 sm:w-20 sm:h-20 border border-gray-400/20 rounded-lg shadow-2xs cursor-pointer object-cover transition-all duration-300 ease-in-out hover:scale-105 ${img === mainImage ? " border-gray-900/30 scale-110" : ""
                }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Details */}
      <div className="flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
          {project.title}
        </h1>

        {/* Description */}
        <p className="mt-3 sm:mt-4 text-gray-700  leading-relaxed text-sm sm:text-base">
          {project.description}
        </p>

        {/* Tech Icons */}
        <div className="flex flex-wrap gap-3 mt-4">
          {project.techIcon.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-2xs bg-gray-600/10 p-2 rounded-2xl w-16 sm:w-20"
            >
              {tech.icon}
              <span className="text-[10px] sm:text-xs mt-1 text-center">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Features list */}
        <div className="mt-6  sm:mt-8 space-y-2 sm:space-y-3">
          <h1 className="text-xl font-bold ">Key Features:</h1>

          <ul className=" ">
            {project.futures.map((future, index) => (
              <li key={index} className="flex items-center gap-2 text-sm sm:text-base">
                <FaCheckCircle className="text-green-500" />
                {future}
              </li>
            ))}
          </ul>
        </div>

        {/* difficulty*/}
        <div className="mt-6  sm:mt-8 space-y-2 sm:space-y-3">
          <h1 className="text-xl font-bold ">Difficulty i face in this project:</h1>
          <p>
            {project.difficulty}
          </p>
        </div>
        
        {/* future plans*/}
        <div className="mt-6  sm:mt-8 space-y-2 sm:space-y-3">
          <h1 className="text-xl font-bold ">Future plans in this project:</h1>
          <p>
            {project.plan}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <MdLaunch /> Live Demo
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
            className="border px-4 sm:px-6 py-2 sm:py-3 rounded-md flex items-center gap-2 transition  bg-gray-800 hover:bg-gray-900 text-white"
          >
            <FaGithub /> GitHub Repo
          </a>
        </div>
      </div>
    </div>

  );
};

export default ProjectDetails;
