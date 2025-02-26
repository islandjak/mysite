"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DesktopIconProps {
  icon: string;
  label: string;
  onClick: () => void;
  className?: string;
  onDragEnd?: (info: any) => void;
  onDrag?: (info: any) => void;
  id: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ 
  icon, 
  label, 
  onClick, 
  className = '',
  onDragEnd,
  onDrag,
  id
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    if (!isDragging) {
      onClick();
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (info: any) => {
    // Call the parent's onDragEnd handler if provided
    if (onDragEnd) {
      onDragEnd(info);
    }
    
    // Reset dragging state after a short delay to allow for click events
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  const handleDrag = (info: any) => {
    if (onDrag) {
      onDrag(info);
    }
  };

  return (
    <motion.div
      className={`flex flex-col items-center cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragTransition={{ 
        power: 0, 
        timeConstant: 0 
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
      onClick={handleClick}
      id={id}
    >
      <div className="text-4xl mb-2 bg-black bg-opacity-10 backdrop-blur-sm w-16 h-16 flex items-center justify-center rounded-lg shadow-sm">
        {icon}
      </div>
      <div className="text-xs text-center px-2 py-1 rounded bg-black bg-opacity-30 backdrop-blur-sm text-white">
        {label}
      </div>
    </motion.div>
  );
};

export default DesktopIcon; 