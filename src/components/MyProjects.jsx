import React from 'react';

const projectData = [
  {
    id: "p1",
    image: "https://i.ibb.co/7NXnbJGC/ss-1.png",
    title: "Ride Nest",
    description:
      "RideNest Website is an online platform where users can browse, book, and manage rental cars with ease. It features user login, real-time booking with date-based pricing, and special offers. Users must sign in to make or view bookings, and admins can manage car listings and reservations.",
    repoLink: "https://github.com/Niloy-Modak/Ride-nest-app",
    liveLink: "https://b11-assingment11.web.app/",
    tech: ["React Js", "Tailwind CSS", "Node Js", "MongoDB", "Firebase Auth", "Vercel"],
  },
  {
    id: "p2",
    image: "https://i.ibb.co/pBsHDHBy/food-ss-1.png",
    title: "Recipe Nest",
    description:
      "Recipe Nest is a website for food recipes where users can share their own recipes and explore those shared by others. Viewing recipes requires users to log in.",
    repoLink: "https://github.com/Niloy-Modak/recipe-nest-app",
    liveLink: "https://b11-assinment-10.web.app/",
    tech: ["React Js", "Tailwind CSS", "Daisy Ui", "Node Js", "MongoDB", "Firebase Auth", "Vercel"],
  },
  {
    id: "p3",
    image: "https://i.ibb.co/SXf3ghRZ/pss-1.png",
    title: "Phudu",
    description:
      "Phudu is a user-friendly doctor booking platform that helps patients easily find and schedule appointments with certified healthcare professionals. It offers real-time availability, doctor profiles, and secure appointment management. Built with modern web technologies, Phudu ensures a seamless and efficient healthcare booking experience.",
    repoLink: "https://github.com/Niloy-Modak/phudu-web-app",
    liveLink: "https://phudu-website.netlify.app/",
    tech: ["React Js", "Tailwind CSS", "Daisy Ui"],
  },
];

const MyProjects = () => {
  return (
    <div className="space-y-10 py-12 md:py-18 lg:py-22 ">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700 ">My Projects</h2>

      {projectData.map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row  items-center gap-6 border border-white/20 p-6 rounded-xl shadow-md bg-white/5"
        >
          {/* Left: Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[372px] object-cover rounded-lg border border-white/10 shadow-sm"
            />
          </div>

          {/* Right: Info */}
          <div className="md:w-1/2 w-full space-y-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-700">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-gray-600/30 text-white px-2 py-1 rounded-full backdrop-blur-md border border-white/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
              >
                Live
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
