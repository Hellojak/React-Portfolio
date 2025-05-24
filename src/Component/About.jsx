// import React from 'react'
// import about from '../assets/about.png'

// const About = () => {
//     return (
//         <div className="">
//             <div className="about container  mx-auto h-auto md:h-[90vh] md:flex gap-5 items-center">

//                 <div className="aboutright md:order-2 p-5 md:w-[60%] ">
//                     <h1 className='font-bold text-2xl'>About Me</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minima laboriosam, est, praesentium adipisci voluptate accusantium cumque velit fugiat itaque beatae recusandae error? Alias facere exercitationem non accusamus expedita veritatis?

//                     </p><br />
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloremque alias consequuntur numquam beatae, minima fugiat repellat, ex eveniet repellendus ullam, voluptatibus minus natus nemo quisquam nesciunt perspiciatis nobis eos.

//                     </p>
//  </div>

//                 <div className="aboutleft md:order-1 md:w-[40%] max-w-[300px] md:max-w-full mx-auto">
//                     <img src={about} alt="" className='
//                     w-full h-auto object-contain'/>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About

import React from 'react';
import { FaUserGraduate, FaCode, FaTools } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import imgs from '../assets/user.png'; // Reusing your existing image

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'CSS/Tailwind', level: 85 },
    { name: 'Express', level: 70 }
  ];

  const education = [
    { year: '2018-2022', degree: 'BSc Computer Science', institution: 'Tech University' },
    { year: '2022-Present', degree: 'Freelance Developer', institution: 'Self-Employed' }
  ];

  return (
    <div className="about py-12 bg-gray-50" id='About'>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-600">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
              <img 
                src={imgs} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-purple-500 opacity-10 hover:opacity-0 transition-opacity duration-300">
                
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="md:w-2/3">
            {/* Bio Section */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaUserGraduate className="mr-2 text-purple-600" />
                Who Am I?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate full-stack developer with 3+ years of experience building web applications.
                Specializing in the MERN stack, I create efficient, scalable solutions with clean code.
                When I'm not coding, you'll find me contributing to open-source projects or learning new technologies.
              </p>
            </div>
            
            {/* Skills Section */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <GiSkills className="mr-2 text-purple-600" />
                My Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education/Experience */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <FaUserGraduate className="mr-2 text-purple-600" />
                  Education
                </h2>
                <ul className="space-y-4">
                  {education.map((item, index) => (
                    <li key={index} className="border-l-4 border-purple-500 pl-4">
                      <h3 className="font-bold">{item.degree}</h3>
                      <p className="text-gray-600">{item.institution}</p>
                      <p className="text-sm text-purple-500">{item.year}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <FaTools className="mr-2 text-purple-600" />
                  Tools & Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {['VS Code', 'Git/GitHub', 'Postman', 'Figma', 'Docker', 'AWS'].map((tool, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;