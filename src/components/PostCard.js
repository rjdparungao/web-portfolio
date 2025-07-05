// src/components/PostCard.jsx

import React from 'react';
import { motion } from 'framer-motion';

function PostCard({ title, description, delay = 0 }) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delay }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}

export default PostCard;
