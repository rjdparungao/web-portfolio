// src/components/Card.jsx

import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

function Card({ title, description, date, audience, delay = 0, icon = null }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center gap-4 mb-3">
        {icon && (
          <img 
            src={icon} 
            alt="Logo" 
            className="w-12 h-12 object-cover rounded-full" 
          />
        )}
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{date} • {audience}</p>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}


export default Card;
