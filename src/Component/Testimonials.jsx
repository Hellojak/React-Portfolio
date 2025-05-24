import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animations
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechSolutions',
      content: 'Working with this developer was an absolute pleasure. They delivered our project ahead of schedule with exceptional quality. Their attention to detail and problem-solving skills are unmatched in the industry.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      content: 'The code quality and architecture decisions were outstanding. They not only met our requirements but anticipated future needs we hadn’t considered. Will definitely hire again for our next project!',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'David Wilson',
      role: 'CTO, StartupHub',
      content: 'Rarely do you find someone who combines technical expertise with such strong communication skills. They made complex technical concepts accessible to our non-technical team members.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Director of Engineering, ScaleUp',
      content: 'Our application performance improved dramatically after their optimizations. They have a keen eye for identifying bottlenecks and implementing elegant solutions.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
  };

  return (
    <div className="testimonials py-16 bg-gray-50 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-purple-600 mb-3">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients and colleagues say about working with me
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6" id='Experience'>
                {/* Quote Icon */}
                <FaQuoteLeft className="text-purple-200 text-3xl mb-4" />
                
                {/* Content */}
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                
                {/* Rating */}
                <div className="flex mb-4" >
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i} 
                      className={`text-${i < testimonial.rating ? 'yellow-400' : 'gray-300'} text-lg`}
                    />
                  ))}
                </div>
                
                
              </div>
              
              {/* Client Info */}
              <div className="bg-purple-50 p-4 flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-purple-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-500 to-purple-00 rounded-xl p-2 "
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm uppercase tracking-wider">Projects</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-sm uppercase tracking-wider">Average Rating</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-sm uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;