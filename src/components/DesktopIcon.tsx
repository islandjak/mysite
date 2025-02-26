"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, onClick, className }) => {
  return (
    <motion.div
      className={`desktop-icon flex flex-col items-center justify-center w-20 cursor-pointer ${className || ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-4xl mb-2 bg-black bg-opacity-10 backdrop-blur-sm w-16 h-16 flex items-center justify-center rounded-lg shadow-sm">{icon}</div>
      <div className="text-xs text-center px-1 py-0.5 rounded bg-black bg-opacity-30 backdrop-blur-sm text-white">{label}</div>
    </motion.div>
  );
};

export default DesktopIcon; 