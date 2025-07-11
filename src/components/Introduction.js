import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { IconContext } from 'react-icons';

import profileImage from '../assets/profile.jpg';
import pupLogo from '../assets/schools/pup-logo.png';
import feulogo from '../assets/schools/feulogo.png';
import srglogo from '../assets/srg-logo.png';

import SocialLinks from './SocialLinks';
import Card from './Card';
import Tabs from './Tabs';

import {
  SiDjango, SiLaravel, SiMysql, SiPostgresql, SiGithub, SiBootstrap, SiPostman,
  SiJavascript, SiJquery, SiDocker, SiWordpress, SiReact, SiTailwindcss, SiGithubactions, SiAxios
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';
import { div } from 'framer-motion/client';

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
                    <p className="text-sm text-gray-500">2019 – Present | Graduation Date: October 2025</p>
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

          {activeTab === 'Experience' && (

            <div className="space-y-6">
              <Card
              title="PUP Quezon City"
              icon={pupLogo}
              audience="Public"
              date="July 3, 2025"
              delay={0.2}
              description={
                <>
                  <p className="font-semibold">Fullstack Software Developer - Internship</p>
                  <p>February 2025 – June 2025</p>
                  <p className="text-sm text-gray-500 mt-2">Developed and maintained dynamic web applications using Python Django, PHP Laravel, and ReactJS. Led the integration of CI/CD workflows and implemented scalable RESTful APIs to streamline deployment and enhance system performance. Collaborated closely with frontend and backend teams to deliver full-stack solutions aligned with business goals.</p>
                </>
              }
              />

              <Card
              title="Software Research Group"
              icon={srglogo}
              audience="Public"
              date="July 3, 2025"
              delay={0.4}
              description={
                <>
                  <p className="font-semibold">Lead Developer - External Team</p>
                  <p>February 2024 – June 2025</p>
                  <p className="text-sm text-gray-500 mt-2"> Served as Lead Developer for SRG’s external team, working directly with outside clients in real-world project environments. Oversaw planning, delegation, and execution of key initiatives while ensuring alignment with client goals and timelines. Collaborated with core departments to maintain cross-functional coordination, fostered a culture of accountability, and led the team in delivering high-quality solutions. Actively resolved challenges, communicated with stakeholders, and supported project continuity from concept to deployment. </p>
                </>
              }
              />

              <Card
              title="Software Research Group"
              icon={srglogo}
              audience="Public"
              date="July 3, 2025"
              delay={0.4}
              description={
                <>
                  <p className="font-semibold">Assistant Overall Lead</p>
                  <p>February 2024 – June 2025</p>
                  <p className="text-sm text-gray-500 mt-2">Collaborated with core teams to ensure seamless coordination across multiple departments. I played a key role in planning, delegating, and executing high-impact initiatives, stepping up to lead when needed and ensuring deliverables were met on time. My leadership focused on supporting the overall vision while driving team productivity, resolving conflicts, and maintaining strong communication among stakeholders.</p>
                </>
              }
              />
            </div>

          )}
        </div>
      </div>
    </section>
  );
}

export default Introduction;
