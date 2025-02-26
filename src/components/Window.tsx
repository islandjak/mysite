"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  isActive?: boolean;
  zIndex?: number;
  onFocus?: () => void;
  width?: string;
  height?: string;
  noPadding?: boolean;
}

const Window: React.FC<WindowProps> = ({
  title,
  isOpen,
  onClose,
  children,
  initialPosition = { x: 100, y: 100 },
  isActive = false,
  zIndex = 10,
  onFocus,
  width = '600px',
  height,
  noPadding = false,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const windowRef = useRef<HTMLDivElement>(null);

  // Function to bring window to front
  const bringToFront = () => {
    if (onFocus) {
      onFocus();
    }
  };

  // Animation variants for the window
  const variants = {
    open: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      scale: 0.8,
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  if (!isOpen) return null;

  return (
    <motion.div
      ref={windowRef}
      className={`window absolute ${isActive ? 'active' : ''}`}
      initial="closed"
      animate="open"
      exit="closed"
      variants={variants}
      drag
      dragMomentum={false}
      onDragStart={() => {
        bringToFront();
      }}
      onDragEnd={(e, info) => {
        // Update position when drag ends
        setPosition(prev => ({
          x: prev.x + info.offset.x,
          y: prev.y + info.offset.y
        }));
      }}
      onClick={bringToFront}
      style={{ 
        width, 
        height,
        maxWidth: '90vw',
        maxHeight: '80vh',
        zIndex,
        x: position.x,
        y: position.y,
      }}
    >
      <div className="window-header cursor-move">
        <div className="window-controls">
          <button 
            className="window-control window-close" 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }} 
          />
          <div className="window-control window-minimize" />
          <div className="window-control window-maximize" />
        </div>
        <div className="text-white text-sm font-medium">{title}</div>
        <div className="w-16" /> {/* Spacer to balance the header */}
      </div>
      <div className={`window-content overflow-auto h-[calc(100%-40px)] ${noPadding ? 'p-0' : ''}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default Window; 