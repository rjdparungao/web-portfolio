// src/components/Card.jsx

import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

function Card({ title = "", description = "", audience = 'Public', date = 'Just now', delay = 0 }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Post Header */}
      <div className="flex items-center mb-4">
        <img
          src={profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover mr-4 border"
        />
        <div>
          <h3 className="font-bold text-gray-800">Rafael Parungao</h3>
          <div className="flex items-center text-gray-500 text-sm space-x-2">
            <span>{audience}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>

      {/* Post Body */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <div className="text-gray-700 mt-3 leading-loose">
          {description}
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
