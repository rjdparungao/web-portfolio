import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/profile.jpg'; // Your profile picture

function Introduction() {
  return (
    <section id="home" className="bg-gray-100 font-poppins min-h-screen pb-10">

      {/* Cover Photo as Solid Pastel Light Blue */}
      <motion.div 
        className="w-full h-56 bg-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Profile and Info Section */}
      <div className="max-w-6xl mx-auto flex items-center gap-10 px-6 mt-[-8rem]">

        {/* Profile Picture */}
        <motion.img 
          src={profileImage}
          alt="Profile"
          className="w-72 h-72 rounded-full border-4 border-white shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Name and Bio */}
        <div className="flex flex-col justify-center pt-12 mt-10">

          {/* Name */}
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-gray-800 mt-10 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Rafael Parungao
          </motion.h1>

          {/* Bio Typewriter */}
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
            className="text-xl sm:text-2xl text-gray-600"
          />
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-3xl mx-auto mt-16 px-6">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">🚧 Coming Soon 🚧</h2>
          <p className="text-gray-600">
            I’m currently working on my portfolio! More sections and projects will be added soon.
          </p>
        </motion.div>
      </div>

    </section>
  );
}

export default Introduction;
