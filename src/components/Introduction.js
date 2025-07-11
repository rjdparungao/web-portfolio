import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { IconContext } from 'react-icons';

import profileImage from '../assets/profile.jpg';
import pupLogo from '../assets/schools/pup-logo.png';
import feulogo from '../assets/schools/feulogo.png';

import SocialLinks from './SocialLinks';
import Card from './Card';
import Tabs from './Tabs';

import {
  SiDjango, SiLaravel, SiMysql, SiPostgresql, SiGithub, SiBootstrap, SiPostman,
  SiJavascript, SiJquery, SiDocker, SiWordpress, SiReact, SiTailwindcss, SiGithubactions, SiAxios
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';

const technologies = [
  { name: 'Python Django', icon: <SiDjango /> },
  { name: 'PHP Laravel', icon: <SiLaravel /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'CI/CD Workflow Integration', icon: <SiGithubactions /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'jQuery', icon: <SiJquery /> },
  { name: 'RESTful API Development', icon: <FaServer /> },
  { name: 'GitHub (GUI and CLI)', icon: <SiGithub /> },
  { name: 'Ajax/Axios', icon: <SiAxios /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'WordPress', icon: <SiWordpress /> },
  { name: 'ReactJS', icon: <SiReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
];

function Introduction() {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <section id="home" className="bg-gray-100 font-poppins min-h-screen pb-10">
      
      {/* Cover Photo */}
      <motion.div 
        className="w-full h-24 sm:h-32 md:h-40 bg-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Profile Info */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10 pt-6 md:pt-0 relative z-10">
          {/* Profile Image */}
          <motion.img 
            src={profileImage}
            alt="Profile"
            className="w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full border-4 border-white shadow-lg object-cover -mt-14 md:-mt-28"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Info */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-5xl md:-mt-0 sm:-mt-0 font-bold text-gray-800"
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
              className="text-base sm:text-lg md:text-xl text-gray-600 mt-1"
            />

            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>


      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 md:px-6 mt-8">
        <div className="w-full"> 
          {activeTab === 'About Me' && (
            <div className="flex flex-col sm:columns-2 gap-5">
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
                icon={profileImage}
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
                icon={profileImage}
                date="July 3, 2025"
                delay={0.4}
              />
            </div>
          )}

          {activeTab === 'Education' && (
            <div className="space-y-6">
              <Card
                title="College Education"
                description={
                  <>
                    <p className="font-semibold">Polytechnic University of the Philippines – Quezon City</p>
                    <p>BS in Information Technology</p>
                    <p className="text-sm text-gray-500">2019 – Present</p>
                  </>
                }
                audience="Public"
                date="July 3, 2025"
                icon={pupLogo}
                delay={0.2}
              />

              <Card
                title="Senior High School"
                description={
                  <>
                    <p className="font-semibold">Far Eastern University – Diliman</p>
                    <p>STEM Strand w/ Specialization in Information Technology</p>
                    <p className="text-sm text-gray-500">2017 – 2019</p>
                  </>
                }
                audience="Public"
                date="July 3, 2025"
                icon={feulogo}
                delay={0.4}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Introduction;
