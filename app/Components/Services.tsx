import { Bug, Code2, Pen } from "lucide-react";
import Link from "next/link";
import React from "react";

// Reusable Card component matching your theme
const Card = ({ children, className = "", hover = true } : {children: any, className: string, hover?: boolean}) => {
  const baseClasses = "bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-all duration-300";
  const hoverClasses = hover ? "hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-1" : "";
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

const services = [
  {
    name: "Web Development",
    icon: <Code2 className="w-7 h-7" />,
    paragraph: "Building modern, responsive web applications with cutting-edge technologies and best practices.",
    accent: "cyan",
  },
  {
    name: "Code Debugging",
    icon: <Bug className="w-7 h-7" />,
    paragraph: "Identifying and resolving complex bugs to ensure optimal performance and user experience.",
    accent: "blue",
  },
  {
    name: "Web Design",
    icon: <Pen className="w-7 h-7" />,
    paragraph: "Creating intuitive, visually stunning interfaces that engage users and drive results.",
    accent: "teal",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="h1 mb-6">Services</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Specialized services to bring your digital vision to life with precision and creativity
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="p-8 group cursor-pointer relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            
            {/* Icon with your theme colors */}
            <div className="relative z-10 mb-6">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:border-cyan-400/50">
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {service.icon}
                </div>
              </div>
            </div>

            {/* Service Title */}
            <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors">
              {service.name}
            </h3>

            {/* Service Description */}
            <p className="relative z-10 text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
              {service.paragraph}
            </p>

            {/* Subtle bottom accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            
            {/* Optional call-to-action */}
            <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <button type="button" className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Learn More →
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Optional CTA section */}
      <div className="text-center mt-16">
        <Link href={"/contact"} className="button inline-flex">
          Get In Touch
        </Link>
      </div>
    </section>
  );
};

export default Services;