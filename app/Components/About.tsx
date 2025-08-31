"use client";
import React from "react";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
  ArrowBigRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Bachelor's in Computer Science",
      description:
        "Graduated with a comprehensive understanding of software engineering principles, algorithms, and system design.",
    },
    {
      year: "2023",
      title: "Full Stack Development",
      description:
        "Mastered modern web technologies and built several projects using React, Node.js, and cloud platforms.",
    },
    {
      year: "2022",
      title: "Programming Foundation",
      description:
        "Started my journey with core programming concepts, data structures, and software development methodologies.",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 95, icon: "▲" },
        { name: "TypeScript", level: 80, icon: "📘" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "JavaScript ES6+", level: 90, icon: "🟨" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express", level: 90, icon: "🚀" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "RESTful APIs", level: 85, icon: "🔗" },
      ],
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "MongoDB", level: 90, icon: "🍃" },
        { name: "Firebase", level: 75, icon: "🔥" },
        { name: "MySQL", level: 65, icon: "🐬" },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "GitHub", level: 85, icon: "👥" },
        { name: "Figma", level: 80, icon: "🎯" },
      ],
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-6 xl:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="h1 mb-6">About Me</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate full stack developer with a fresh perspective and strong
            foundation in modern web technologies. I love creating seamless
            digital experiences that bridge the gap between design and
            functionality.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Personal Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As a recent Computer Science graduate, I've spent the last
                  four years immersing myself in the world of software
                  development. What started as curiosity about how websites work
                  has evolved into a passion for creating innovative digital
                  solutions.
                </p>
                <p>
                  I specialize in full stack development, combining my love for
                  clean, intuitive user interfaces with robust backend systems.
                  My approach focuses on writing maintainable code, optimizing
                  performance, and creating applications that users genuinely
                  enjoy using.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open source projects, or staying
                  up-to-date with the latest industry trends. I believe in
                  continuous learning and pushing the boundaries of what's
                  possible with technology.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <Link href="/contact">
                <button className="group button">
                Let's Work Together
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </Link>
          </div>

          {/* Right Column - Timeline */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
              Timeline
            </h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  {/* Timeline line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-1.5 top-5 w-0.5 h-16 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
                  )}
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="text-cyan-400 font-semibold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div className="mb-20">
          <h2 className="h1 text-center">Technical Expertise</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and
            continuous learning
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:-translate-y-2 group relative overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                ></div>

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xl group-hover/skill:scale-125 transition-transform duration-200">
                            {skill.icon}
                          </span>
                          <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-cyan-400 font-semibold text-sm">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover/skill:scale-x-105`}
                          style={{
                            width: `${skill.level}%`,
                            animation: `slideIn 1.5s ease-out ${
                              skillIndex * 0.1
                            }s both`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ping"></div>
              </div>
            ))}
          </div>

          {/* Skills Summary Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group cursor-default">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Frontend</div>
              <div className="text-gray-400 text-sm">Responsive Design</div>
            </div>

            <div className="text-center group cursor-default">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Backend</div>
              <div className="text-gray-400 text-sm">API Development</div>
            </div>

            <div className="text-center group cursor-default">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Cloud</div>
              <div className="text-gray-400 text-sm">Deployment</div>
            </div>

            <div className="text-center group cursor-default">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">DevOps</div>
              <div className="text-gray-400 text-sm">Version Control</div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
        `}</style>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              2024
            </div>
            <p className="text-gray-400">Graduated</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <p className="text-gray-400">Technologies</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-400">Dedicated</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
