import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Image imports
import imgRide1 from '../assets/ride-nest-web/ss-1.png';
import imgRide2 from '../assets/ride-nest-web/ss-2.png';
import imgRide3 from '../assets/ride-nest-web/ss-3.png';
import imgRide4 from '../assets/ride-nest-web/ss-4.png';
import imgRide5 from '../assets/ride-nest-web/ss-5.png';

import imgRecipe1 from '../assets/food-nest-web/food-ss-1.png';
import imgRecipe2 from '../assets/food-nest-web/food-ss-2.png';
import imgRecipe3 from '../assets/food-nest-web/food-ss-3.png';
import imgRecipe4 from '../assets/food-nest-web/food-ss-4.png';
import imgRecipe5 from '../assets/food-nest-web/food-ss-5.png';

import imgP1 from '../assets/phudu-web/pss-1.png';
import imgP2 from '../assets/phudu-web/pss-2.png';
import imgP3 from '../assets/phudu-web/pss-3.png';
import imgP4 from '../assets/phudu-web/pss-4.png';
import imgP5 from '../assets/phudu-web/pss-5.png';

const projectData = [
  {
    id: "p1",
    images: [imgRide1, imgRide2, imgRide3, imgRide4, imgRide5],
    title: "RideNest",
    description:
      "RideNest Website is an online platform where users can browse, book, and manage rental cars with ease. It features user login, real-time booking with date-based pricing, and special offers. Users must sign in to make or view bookings, and admins can manage car listings and reservations.",
    repoLink: "https://github.com/Niloy-Modak/Ride-nest-app",
    liveLink: "https://b11-assingment11.web.app/",
    tech: ["React Js", "Tailwind CSS", "Node Js", "MongoDB", "Firebase Auth", "Vercel"],
  },
  {
    id: "p2",
    images: [imgRecipe1, imgRecipe2, imgRecipe3, imgRecipe4, imgRecipe5],
    title: "Recipe Nest",
    description:
      "Recipe Nest is a website for food recipes where users can share their own recipes and explore those shared by others. Viewing recipes requires users to log in.",
    repoLink: "https://github.com/Niloy-Modak/recipe-nest-app",
    liveLink: "https://b11-assinment-10.web.app/",
    tech: ["React Js", "Tailwind CSS", "Daisy Ui", "Node Js", "MongoDB", "Firebase Auth", "Vercel"],
  },
  {
    id: "p3",
    images: [imgP1, imgP2, imgP3, imgP4, imgP5],
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
    <div className="space-y-10 py-12 md:py-18 lg:py-22">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">My Projects</h2>

      {projectData.map((project) => (
        <Fade key={project.id}>
          <div className="flex flex-col md:flex-row items-center gap-6 border border-white/20 p-6 rounded-xl shadow-md bg-white/5">
            {/* Swiper Image Carousel */}
            <div className="md:w-1/2 w-full">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop={true}
                slidesPerView={1}
              >
                {project.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`${project.title} Screenshot ${index + 1}`}
                      loading="lazy"
                      className="w-full h-[372px] object-cover rounded-lg border border-white/10 shadow-sm"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Project Info */}
            <div className="md:w-1/2 w-full space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-700">{project.description}</p>

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
        </Fade>
      ))}
    </div>
  );
};

export default MyProjects;
