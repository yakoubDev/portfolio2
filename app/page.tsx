import React from "react";
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Github,
  Linkedin,
  Mail,
  Code2,
} from "lucide-react";
import Services from "./Components/Services";
import About from "./Components/About";
import Link from "next/link";

const Home = () => {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind",
    "Framer-motion",
    "Java",
    "C",
    "Python",
  ];

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 container mx-auto py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                Yakoub Dev<span className="text-white">.</span>
              </h1>
              <div className="text-xl font-semibold">
                Software Engineer <span className="text-accent">&</span> Web Developer
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Crafting digital experiences with modern technologies. I build
                scalable web applications and bring ideas to life through clean,
                efficient code.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium border border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">3+</div>
                <div className="text-sm text-gray-400">Years of experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400">Passion</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/work">
                <button className="group button">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  Get In Touch
                </button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="relative">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl transform -rotate-6"></div>

              {/* Photo container */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                {/* Replace this div with your actual image */}
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center text-gray-400">
                  {/* Placeholder - replace with: <img src="your-photo.jpg" alt="Yakoub Dev" className="w-full h-full object-cover rounded-2xl" /> */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-sm">Replace with your photo</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center backdrop-blur-lg border border-cyan-400/30">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-lg border border-blue-500/30">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute  left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />
    </main>
  );
};

export default Home;
