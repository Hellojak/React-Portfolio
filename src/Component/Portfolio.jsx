import React, { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration and admin dashboard",
      tags: ["react", "node", "mongodb"],
      image: img1,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with real-time collaboration features",
      tags: ["react", "firebase"],
      image: img2,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Custom designed developer portfolio with animations",
      tags: ["react", "tailwind"],
      image: img3,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with forecasting",
      tags: ["react", "api"],
      image: img4,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "Data visualization tool for social media metrics",
      tags: ["node", "mongodb"],
      image: img5,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile-friendly workout and nutrition tracking application",
      tags: ["react", "node"],
      image: img6,
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'react', name: 'React' },
    { id: 'node', name: 'Node.js' },
    { id: 'mongodb', name: 'MongoDB' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const getTechIcon = (tech) => {
    switch(tech) {
      case 'react': return <FaReact className="text-blue-400" />;
      case 'node': return <FaNodeJs className="text-green-500" />;
      case 'mongodb': return <FaDatabase className="text-green-600" />;
      case 'typescript': return <SiTypescript className="text-blue-600" />;
      case 'tailwind': return <SiTailwindcss className="text-cyan-400" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8" id='Portfolio'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">My Portfolio</h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Explore my collection of projects showcasing my skills and experience
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-purple-700 hover:bg-purple-100 shadow-md'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-purple-900">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-lg">
                        {getTechIcon(tag)}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <FiGithub className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-24 bg-gradient-to-r from-purple-700 to-purple-900 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <FaReact className="text-5xl mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold">React</h3>
              <p className="text-purple-200">Frontend Development</p>
            </div>
            <div className="p-4">
              <FaNodeJs className="text-5xl mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-semibold">Node.js</h3>
              <p className="text-purple-200">Backend Development</p>
            </div>
            <div className="p-4">
              <FaDatabase className="text-5xl mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold">MongoDB</h3>
              <p className="text-purple-200">Database Solutions</p>
            </div>
            <div className="p-4">
              <SiTailwindcss className="text-5xl mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
              <p className="text-purple-200">Styling Framework</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;