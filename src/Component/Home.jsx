import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Home = () => {
  const features = [
    {
      icon: <FaReact className="text-4xl text-blue-500" />,
      title: "React Development",
      description: "Modern, responsive web applications built with React"
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      title: "Node.js Backend",
      description: "Scalable server-side solutions with Node.js"
    },
    {
      icon: <SiTypescript className="text-4xl text-blue-600" />,
      title: "TypeScript",
      description: "Type-safe code for better maintainability"
    },
    {
      icon: <SiTailwindcss className="text-4xl text-cyan-400" />,
      title: "Tailwind CSS",
      description: "Beautiful, utility-first styling"
    },
    {
      icon: <FaDatabase className="text-4xl text-green-600" />,
      title: "Database Solutions",
      description: "MongoDB, PostgreSQL, and more"
    }
  ];

  return (
 <>
    <Hero/>
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto border text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hello, I'm a Full-Stack Developer</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            I build modern, performant web applications with cutting-edge technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/portfolio" 
              className="px-8 py-3 bg-white text-purple-700 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-purple-700 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-center mb-2 text-purple-700">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Contact/>
      
      <About/>
      <Portfolio/>
      <Testimonials/>



      {/* CTA Section */}
      <section className="bg-purple-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's work together to bring your ideas to life with custom web solutions
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
    </>
  );
  
};

export default Home;