"use client";
import React, { useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Car+",
    description:
      "Car+ connects drivers with nearby mechanics and roadside assistance in seconds.",
    stack: [
      { name: "NextJs" },
      { name: "Tailwind" },
      { name: "TypeScript" },
      { name: "Express" },
      { name: "Leaflet Map" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/Car+/CarPlus.png",
    live: "https://car-plus-two.vercel.app/",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Tech Mingle",
    description:
      "Tech Mingle provides digital solutions including Web Development, Graphic Design, and Video Editing.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Motion" },
      { name: "TypeScript" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/TechMingle/Tech-Mingle.png",
    live: "https://techmingle-one.vercel.app/",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "TM-STORE",
    description:
      "An e-commerce platform offering seamless product browsing, dynamic admin dashboard, and secure checkout integration.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Motion" },
      { name: "TypeScript" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Cloudinary" },
    ],
    image: "/assets/work/tm-store/tm_store_landing.jpg",
    live: "https://tm-store.vercel.app/",
  },
    {
    num: "04",
    category: "Full Stack",
    title: "Easy-Foot (In-Progress)",
    description:
      "A platform where stadium and pitches managements made easier, quick and straight",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Motion" },
      { name: "TypeScript" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Cloudinary" },
    ],
    image: "/assets/work/EasyFoot/Hero.jpg",
    live: "https://easyfoot.vercel.app/",
  },
  {
    num: "04",
    category: "Frontend",
    title: "EasyDocs (Front-End)",
    description: "EasyDocs made requesting civil documents online easier.",
    stack: [{ name: "NextJs" }, { name: "Tailwind" }],
    image: "/assets/work/EasyDocs/easydocs.png",
    live: "https://easydocs-nu.vercel.app/",
  },
];

const Work = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pb-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight text-center mb-6">
          My Work
        </h1>

        <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mx-auto leading-relaxed">
          Explore my latest projects featuring modern web technologies and
          innovative solutions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10" />

                  {/* Project Number Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 font-bold text-lg">
                      {project.num}
                    </span>
                  </div>

                  {/* Placeholder for project image */}
                  <Image
                    className="opacity-70 group-hover:opacity-100"
                    src={project.image}
                    fill
                    alt=""
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/25"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </Link>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                />
              </div>

              {/* Floating Elements for Animation */}
              <div
                className={`absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full transition-all duration-500 ${
                  hoveredProject === index
                    ? "scale-150 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              />
              <div
                className={`absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full transition-all duration-700 ${
                  hoveredProject === index
                    ? "scale-100 opacity-60"
                    : "scale-0 opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* View More Section */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group">
            <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
              View All Projects
            </span>
            <ChevronRight 
              size={20} 
              className="text-cyan-400 transform group-hover:translate-x-1 transition-transform duration-300" 
            />
          </div>
        </div> */}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-700/50">
          {[
            { label: "Projects Completed", value: "5+" },
            { label: "Technologies Used", value: "12+" },
            { label: "Years of experience", value: "3+" },
            { label: "Code Commits", value: "300+" },
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with cutting-edge
              technology and modern design principles.
            </p>
            <Link href={"/contact"}>
              <button className="button mx-auto">
                Get In Touch
                <ChevronRight size={20} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
