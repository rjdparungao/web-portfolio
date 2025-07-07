import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';

// Importing assets
import profileImage from '../assets/profile.jpg';
import djangoIcon from '../assets/technologies/django-icon.svg';
import laravelIcon from '../assets/technologies/laravel-3.svg';
import restApiIcon from '../assets/technologies/rest-api.svg';

import SocialLinks from './SocialLinks';
import Card from './Card';
import Tabs from './Tabs';

import { 
  SiDjango, SiLaravel, SiMysql, SiPostgresql, SiGithub, SiBootstrap, SiPostman,
  SiJavascript, SiJquery, SiDocker, SiWordpress, SiReact, SiTailwindcss, SiGithubactions, SiAxios 
} from 'react-icons/si';
import { FaServer, FaCogs } from 'react-icons/fa';

const technologies = [
  { name: 'Python Django', icon: <SiDjango /> },
  { name: 'PHP Laravel', icon: <SiLaravel /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'CI/CD Workflow Integration', icon: <SiGithubactions /> }, // Close representation
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'jQuery', icon: <SiJquery /> },
  { name: 'RESTful API Development', icon: <FaServer /> }, // Server icon as REST API representation
  { name: 'GitHub (GUI and CLI)', icon: <SiGithub /> },
  { name: 'Ajax/Axios', icon: <SiAxios /> }, // Axios icon
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'WordPress', icon: <SiWordpress /> },
  { name: 'ReactJS', icon: <SiReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
];


function Introduction() {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <section id="home" className="bg-gray-100 font-poppins min-h-screen pb-10">

      {/* Responsive Cover Photo */}
      <motion.div 
        className="w-full h-24 sm:h-32 md:h-40 bg-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>


      {/* Profile Info */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 md:px-6 mt-[-8rem]">
        <motion.img 
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-white shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="flex flex-col justify-center text-center md:text-left pt-8 md:pt-12 mt-6 md:mt-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-14 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Rafael Parungao
          </motion.h1>

          <TypeAnimation
            sequence={[
              'Aspiring Backend Developer',
              3000,
              'Aspiring Frontend Developer',
              3000,
              'Highly Dedicated',
              3000,
              'Lifelong Learner',
              3000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg sm:text-xl md:text-2xl text-gray-600"
          />

          {/* Social Links */}
          <div className="flex justify-center md:justify-start mt-4 gap-4">
            <SocialLinks />
          </div>

        </div>
      </div>

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 md:px-6 mt-8">
        <div className="w-full"> 
            {activeTab === 'About Me' && (
             
              <div className='flex flex-col sm:columns-2 gap-5'>
                  <Card
                    title="Career Objective"
                    description={
                      <p>
                        I’m an aspiring <strong>software developer</strong> with solid hands-on experience in <strong>backend</strong> and API development, along
                        with practical skills in <strong>frontend</strong> technologies. I’ve led and contributed to <strong>real-world projects</strong> for GFMIC Inc., PUPQC,
                        and affiliated organizations, delivering functional systems that meet actual user needs. I’m eager to bring value to
                        client-driven projects, contribute to meaningful work, and keep growing as a developer in a fast-paced, collaborative
                        environment.
                      </p>
                    }
                    audience="Public"
                    date="July 3, 2025"
                    delay={0.2}
                  />
                  
                  <Card
                    title="Key Skills/Technologies"
                    description={
                      <IconContext.Provider value={{ size: '5rem', className: 'text-gray-600 hover:scale-110 hover:text-blue-500 transition cursor-pointer' }}>
                        <div className="space-y-4 mt-8">
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
                            {technologies.map((tech, index) => (
                              <div key={index} className="flex flex-col items-center gap-3">
                                {tech.icon}
                                <p className="text-sm text-center">{tech.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </IconContext.Provider>
                    }
                    audience="Public"
                    date="July 3, 2025"
                    delay={0.4}
                  />


              </div>

            )}

            {activeTab === 'Education' && (
              <Card
                title="🎓 Education"
                description="BS in Information Technology - 4th Year Student"
                audience="Public"
                date="July 3, 2025"
                delay={0.2}
              />

            )}
            {/* 
            {activeTab === 'Experience' && (

            )}

            {activeTab === 'Certifications' && (

            )}

            {activeTab === 'Projects' && (

            )} 
            */}
        </div>
      </div>


    </section>
  );
}

export default Introduction;
