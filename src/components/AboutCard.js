import React from 'react';
import { motion } from 'framer-motion';

function AboutCard() {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
      <p className="text-gray-700 mb-4">
        I’m an aspiring software developer with solid hands-on experience in backend and API development, along
        with practical skills in frontend technologies. I’ve led and contributed to real-world projects for GFMIC Inc., PUPQC,
        and affiliated organizations, delivering functional systems that meet actual user needs. I’m eager to bring value to
        client-driven projects, contribute to meaningful work, and keep growing as a developer in a fast-paced, collaborative
        environment.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>💻 Backend Developer</li>
        <li>🌐 Web Developer</li>
        <li>🎓 Lifelong Learner</li>
        <li>🚀 Passionate about clean code</li>
      </ul>
    </motion.div>
  );
}

export default AboutCard;