import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { IconContext } from 'react-icons';

import profileImage from '../assets/profile.jpg';
import pupLogo from '../assets/schools/pup-logo.png';
import feulogo from '../assets/schools/feulogo.png';
import srglogo from '../assets/srg-logo.png';
import fortinetLogo from '../assets/certifications/fortinet.png';
import mablLogo from '../assets/certifications/mabl.jpg';
import soloLearnLogo from '../assets/certifications/solo-learn.png';

import gunifyLandingPage from '../assets/projects/gunify/gunify-landingpage.png';
import alpsLandingPage from '../assets/projects/alps/alps-calendar.png';
import dalayLandingPage from '../assets/projects/dalay/dalay-login.png';
import crgsLoginPage from '../assets/projects/crgs/crgs-login.jpg';
import bitboLoginPage from '../assets/projects/bitbo/bitbo-login.png';
import eventLandingPage from '../assets/projects/gunify/gunify-event.png';
import financeLandingPage from '../assets/projects/gunify/gunify-finance.png';


import SocialLinks from './SocialLinks';
import Card from './Card';
import Tabs from './Tabs';

import {
  SiDjango, SiLaravel, SiMysql, SiPostgresql, SiGithub, SiBootstrap, SiPostman,
  SiJavascript, SiJquery, SiDocker, SiWordpress, SiReact, SiTailwindcss, SiGithubactions, SiAxios,
  SiHostinger,
  SiPhp
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

          {activeTab === 'Certifications' && (
            <div className="space-y-6">

              <Card
                title="Fortinet Certified Fundamentals in Cybersecurity"
                description={
                  <>
                    <p className="font-semibold">Fortinet</p>
                    <p>Credential ID: 2761837082RP</p>
                    <p className="text-sm text-gray-500">Issued: Jul 2024 · Expires: Jul 2026</p>
                  </>
                }
                audience="Public"
                date="July 3, 2025"
                icon={fortinetLogo} // Replace or use a local asset
                delay={0.2}
              />

              <Card
                title="mabl Skills Certification: Foundations"
                description={
                  <>
                    <p className="font-semibold">mabl</p>
                    <p>Credential ID: pxxo9ogohkgv</p>
                    <p className="text-sm text-gray-500">Issued: May 2024</p>
                  </>
                }
                audience="Public"
                date="July 3, 2025"
                icon={mablLogo} // Replace with local asset if needed
                delay={0.3}
              />

              <Card
                title="PHP Fundamentals"
                description={
                  <>
                    <p className="font-semibold">Sololearn</p>
                    <p>Credential ID: CT-JGUOYXO8</p>
                    <p className="text-sm text-gray-500">Issued: Oct 2022</p>
                  </>
                }
                audience="Public"
                date="July 3, 2025"
                icon={soloLearnLogo} // Optional, replace with local if desired
                delay={0.4}
              />

              <Card
                title="Web Development Fundamentals"
                description={
                  <>
                    <p className="font-semibold">Sololearn</p>
                    <p>Credential ID: CT-OCNQ9IGG</p>
                    <p className="text-sm text-gray-500">Issued: Sep 2022</p>
                  </>
                }
                audience="Public"
                date="July 3, 2025"
                icon={soloLearnLogo}
                delay={0.5}
              />

            </div>
          )}

          {activeTab === 'Projects' && (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


              <Card
                title="ALPS Calendar"
                description={
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="mb-4 text-sm text-gray-700">
                        Developed a dynamic calendar system for ALPS to schedule trainings, assign facilitators and clients, and manage facilitator unavailability — enhancing coordination and efficiency
                      </p>

                      <a
                        href="https://alpscalendar.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block mb-4"
                      >
                        <img 
                          src={alpsLandingPage} 
                          alt="ALPS Calendar Screenshot" 
                          className="w-full h-48 object-cover rounded-lg shadow-lg transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Visit Project</span>
                        </div>
                      </a>
                    </div>

                    <div className="flex gap-3 text-xl text-gray-600">
                      <SiLaravel title="Laravel" />
                      <SiBootstrap title="Bootstrap" />
                      <SiGithubactions title="Github Actions" />
                      <SiMysql title="MySQL" />
                      <SiHostinger title="Hostinger" />
                      <SiJquery title="Jquery" />
                      <SiPostman title="Postman" />
                      <SiGithub title="Postman" />
                    </div>
                  </div>
                }
                audience="ALPS"
                date="October 2024 - February 2025"
                icon={profileImage}
                delay={0.2}
              />


              <Card
                title="GUnify Information System"
                description={
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="mb-4 text-sm text-gray-700">
                        Built Gunify Information System — a modular platform combining event, member, finance, and web portal management through scalable microservices for seamless operations.
                      </p>

                      <a
                        href="http://portal.gfmic.ph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block mb-4"
                      >
                        <img 
                          src={gunifyLandingPage} 
                          alt="GUnify Landing Page" 
                          className="w-full h-48 object-cover rounded-lg shadow-lg transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Visit Project</span>
                        </div>
                      </a>
                    </div>

                    <div className="flex gap-3 text-xl text-gray-600">
                      <SiDjango title="Laravel" />
                      <SiBootstrap title="Bootstrap" />
                      <SiGithubactions title="Github Actions" />
                      <SiMysql title="MySQL" />
                      <SiHostinger title="Hostinger" />
                      <SiJquery title="Jquery" />
                      <SiDocker title="Docker"/>
                      <SiPostman title="Postman" />
                      <SiGithub title="Postman" />
                    </div>
                  </div>
                }
                audience="GFMIC"
                date="July 2024 - March 2025"
                icon={profileImage}
                delay={0.4}
              />

              <Card
                title="DALAY"
                description={
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="mb-4 text-sm text-gray-700">
                        Created DALAY, a barangay management system with vaccine tracking and a forecasting algorithm — improving health service planning and distribution efficiency.
                      </p>

                      <a
                        href="https://trial-dalay.gfmic.ph/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block mb-4"
                      >
                        <img 
                          src={dalayLandingPage} 
                          alt="DALAY Landing Page" 
                          className="w-full h-48 object-cover rounded-lg shadow-lg transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Visit Project</span>
                        </div>
                      </a>
                    </div>

                    <div className="flex gap-3 text-xl text-gray-600">
                      <SiLaravel title="Laravel" />
                      <SiBootstrap title="Bootstrap" />
                      <SiGithubactions title="Github Actions" />
                      <SiMysql title="MySQL" />
                      <SiHostinger title="Hostinger" />
                      <SiJquery title="Jquery" />
                      <SiPostman title="Postman" />
                      <SiGithub title="Postman" />
                    </div>
                  </div>
                }
                audience="GFMIC"
                date="February 2023 - February 2025"
                icon={profileImage}
                delay={0.6}
              />

              <Card
                title={
                  <span className="text-sm">Collection Report Generator System</span>
                }
                description={
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="mb-4 text-sm text-gray-700">
                        Built CRGS, a collection and deposit tracking system with receipt printing and automated report generation — streamlining daily financial operations for the institution.
                      </p>

                      <a
                        href="#"
                        className="relative group block mb-4"
                      >
                        <img 
                          src={crgsLoginPage} 
                          alt="DALAY Landing Page" 
                          className="w-full h-48 object-cover rounded-lg shadow-lg transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Deployed Within The Institution</span>
                        </div>
                      </a>
                    </div>

                    <div className="flex gap-3 text-xl text-gray-600">
                      <SiPhp title="Php" />
                      <SiBootstrap title="Bootstrap" />
                      <SiMysql title="MySQL" />
                      <SiJquery title="Jquery" />
                      <SiGithub title="Postman" />
                    </div>
                  </div>
                }
                audience="PUPQC"
                date="March 2025 - June 2025"
                icon={profileImage}
                delay={0.8}
              />


              <Card
                title="BitBo"
                description={
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="mb-4 text-sm text-gray-700">
                        Developed BitBo, a barangay management system for tracking residents, blotters, ordinances, and certifications — streamlining operations and improving records and reporting.
                      </p>


                      <a
                        href="#"
                        className="relative group block mb-4"
                      >
                        <img 
                          src={bitboLoginPage} 
                          alt="DALAY Landing Page" 
                          className="w-full h-48 object-cover rounded-lg shadow-lg transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Deployed Within The Institution</span>
                        </div>
                      </a>
                    </div>

                    <div className="flex gap-3 text-xl text-gray-600">
                      <SiLaravel title="Laravel" />
                      <SiBootstrap title="Bootstrap" />
                      <SiGithubactions title="Github Actions" />
                      <SiMysql title="MySQL" />
                      <SiHostinger title="Hostinger" />
                      <SiJquery title="Jquery" />
                      <SiPostman title="Postman" />
                      <SiGithub title="Postman" />
                    </div>
                  </div>
                }
                audience="GFMIC"
                date="February 2023 - February 2025"
                icon={profileImage}
                delay={1.0}
              />


              <Card
                title="GUnify Event Module V2"
                description={
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="mb-4 text-sm text-gray-700">
                        Built Gunify Event Module V2 to manage event posts, speakers, attendees, and waitlists — streamlining event flow and automating certificate generation.
                      </p>

                      <a
                        href="http://event.gfmic.ph/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block mb-4"
                      >
                        <img 
                          src={eventLandingPage} 
                          alt="DALAY Landing Page" 
                          className="w-full h-48 object-cover rounded-lg shadow-lg transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Visit Project</span>
                        </div>
                      </a>
                    </div>

                    <div className="flex gap-3 text-xl text-gray-600">
                      <SiDjango title="Laravel" />
                      <SiBootstrap title="Bootstrap" />
                      <SiGithubactions title="Github Actions" />
                      <SiMysql title="MySQL" />
                      <SiHostinger title="Hostinger" />
                      <SiJquery title="Jquery" />
                      <SiDocker title="Docker"/>
                      <SiPostman title="Postman" />
                      <SiGithub title="Postman" />
                    </div>
                  </div>
                }
                audience="GFMIC"
                date="February 2023 - February 2025"
                icon={profileImage}
                delay={1.2}
              />

              <Card
                title="GUnify Finance Module V2"
                description={
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="mb-4 text-sm text-gray-700">
                        Developed Gunify Finance Module V2 to manage collections from events and memberships — automating revenue tracking and financial report generation.
                      </p>

                      <a
                        href="http://finance.gfmic.ph/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block mb-4"
                      >
                        <img 
                          src={financeLandingPage} 
                          alt="DALAY Landing Page" 
                          className="w-full h-48 object-cover rounded-lg shadow-lg transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Visit Project</span>
                        </div>
                      </a>
                    </div>

                    <div className="flex gap-3 text-xl text-gray-600">
                      <SiDjango title="Laravel" />
                      <SiBootstrap title="Bootstrap" />
                      <SiGithubactions title="Github Actions" />
                      <SiMysql title="MySQL" />
                      <SiHostinger title="Hostinger" />
                      <SiJquery title="Jquery" />
                      <SiDocker title="Docker"/>
                      <SiPostman title="Postman" />
                      <SiGithub title="Postman" />
                    </div>
                  </div>
                }
                audience="GFMIC"
                date="February 2023 - February 2025"
                icon={profileImage}
                delay={1.4}
              />

              

           </div>

          )}

        </div>
      </div>
    </section>
  );
}

export default Introduction;
