"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface DesktopIconProps {
  id: string;
  icon: string;
  label: string;
  onClick: () => void;
  className?: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  icon,
  label,
  onClick,
  className = '',
}) => {
  return (
    <motion.div 
      id={id}
      className={`flex flex-col items-center justify-center w-20 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 mb-2 text-4xl bg-black bg-opacity-10 backdrop-blur-sm rounded-lg shadow-sm"
        whileHover={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.15)', 
          y: -2 
        }}
      >
        {icon}
      </motion.div>
      <motion.div 
        className="px-2 py-1 text-xs text-center text-white rounded bg-black bg-opacity-30 backdrop-blur-sm"
        whileHover={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default DesktopIcon; 