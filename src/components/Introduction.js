import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/profile.jpg';

import AboutCard from './AboutCard';
import PostCard from './PostCard';
import Tabs from './Tabs';

function Introduction() {
  const [activeTab, setActiveTab] = useState('Posts');

  return (
    <section id="home" className="bg-gray-100 font-poppins min-h-screen pb-10">

      {/* Cover Photo */}
      <motion.div 
        className="w-full h-56 bg-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Profile Info */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 md:px-6 mt-[-8rem]">
        <motion.img 
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-white shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="flex flex-col justify-center text-center md:text-left pt-6 md:pt-12 mt-6 md:mt-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Rafael Parungao
          </motion.h1>

          <TypeAnimation
            sequence={[
              'Aspiring Backend Developer',
              2000,
              'Web Developer',
              2000,
              'Lifelong Learner',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg sm:text-xl md:text-2xl text-gray-600"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 md:px-6 mt-8">
        {activeTab === 'About Me' && (
          <div className="w-full">
            <AboutCard />
          </div>
        )}

        {activeTab === 'Education' && (
          <div className="w-full lg:w-2/3 space-y-6">
            <PostCard
              title="🎓 Education"
              description="BS in Information Technology - 4th Year Student"
              delay={0.2}
            />
          </div>
        )}
      </div>

    </section>
  );
}

export default Introduction;
