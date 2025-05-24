import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiHackster } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { title: "Quick Links", items: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Contact", path: "/contact" }
    ]},
    { title: "Services", items: [
      { name: "Web Development", path: "/" },
      { name: "UI/UX Design", path: "/" },
      { name: "Mobile Apps", path: "/" }
    ]},
    { title: "Legal", items: [
      { name: "Privacy Policy", path: "/" },
      { name: "Terms of Service", path: "/" },
      { name: "Cookie Policy", path: "/" }
    ]}
  ];

  const socials = [
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaGithub />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-purple-800 to-purple-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5  gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <SiHackster className="text-4xl text-purple-300 mr-3" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white">
                III Dev
              </span>
            </div>
            <p className="text-purple-100 mb-6 max-w-md">
              Creating beautiful digital experiences with cutting-edge technology and innovative design.
            </p>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-700 hover:bg-purple-600 transition-colors text-purple-100"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {links.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-purple-700 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className='list-none'>
                    <Link
                      to={item.path}
                      className="text-purple-200 hover:text-white transition-colors flex items-center"
                    >
                      {/* <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span> */}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-purple-700 mt-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-purple-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} III Dev. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/" className="text-purple-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-purple-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-purple-200 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;