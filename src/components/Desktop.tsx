"use client";

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import Image from 'next/image';

// Content components
const AboutContent = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">About Me</h2>
    <p>
      Hello! I&apos;m a passionate developer/designer with a love for creating beautiful, 
      functional digital experiences. This minimalist website reflects my design philosophy: 
      simplicity, elegance, and attention to detail.
    </p>
    <p>
      When I&apos;m not coding, you can find me exploring nature, reading design books, 
      or experimenting with new creative tools and technologies.
    </p>
  </div>
);

// Project data
const projectsData = [
  {
    id: 'project1',
    title: 'Portfolio Website',
    preview: 'A beautiful, responsive portfolio website built with React and Three.js',
    date: 'June 2023',
    content: (
      <div className="space-y-6">
        <p className="text-base">
          A stunning portfolio website that showcases my work with interactive 3D elements.
          Built with React, Three.js, and Framer Motion for smooth animations.
        </p>
        <div className="bg-blue-500 bg-opacity-20 rounded-lg p-4 border border-blue-400 border-opacity-30">
          <h4 className="font-medium text-blue-300 mb-2 text-lg">Technologies Used</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>React.js for UI components</li>
            <li>Three.js for 3D elements</li>
            <li>Framer Motion for animations</li>
            <li>Tailwind CSS for styling</li>
          </ul>
        </div>
        <div className="mt-6">
          <a href="#" className="text-blue-300 hover:underline text-base inline-flex items-center">
            View Live Demo
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    )
  },
  {
    id: 'project2',
    title: 'Just My Beer',
    preview: 'A comprehensive beer discovery platform with community-driven insights',
    date: 'May 2024',
    content: (
      <div className="space-y-6">
        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
          <Image 
            src="/justmybeer2.png" 
            alt="Just My Beer application screenshot" 
            fill 
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        
        <p className="text-base">
          A comprehensive beer discovery platform that helps enthusiasts explore, rate, and track craft beers. 
          The application combines community ratings with personalized recommendations to create a rich, 
          interactive experience for beer lovers.
        </p>
        
        <div className="bg-amber-500 bg-opacity-20 rounded-lg p-4 border border-amber-400 border-opacity-30">
          <h4 className="font-medium text-amber-300 mb-2 text-lg">Tech Stack</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Next.js 14.1.0 with TypeScript</li>
            <li>Tailwind CSS and Framer Motion</li>
            <li>Prisma ORM v5.0.0 with PostgreSQL</li>
            <li>NextAuth.js v4.24.0 and SWR</li>
            <li>Leaflet.js for interactive maps</li>
          </ul>
        </div>
        
        <div className="bg-blue-500 bg-opacity-20 rounded-lg p-4 border border-blue-400 border-opacity-30">
          <h4 className="font-medium text-blue-300 mb-2 text-lg">Key Features</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Comprehensive beer database with detailed information</li>
            <li>Dual rating system with community and &quot;Paul&quot; ratings</li>
            <li>Interactive map for geolocation-based beer exploration</li>
            <li>User profiles with reviews, favorites, and submissions</li>
            <li>Real-time activity feed of community interactions</li>
          </ul>
        </div>
        
        <div className="bg-purple-500 bg-opacity-20 rounded-lg p-4 border border-purple-400 border-opacity-30">
          <h4 className="font-medium text-purple-300 mb-2 text-lg">Development Timeline</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Version 2.0 Release</span>
              <span className="text-sm opacity-70">May 2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Interactive Maps Integration</span>
              <span className="text-sm opacity-70">April 2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Initial Release</span>
              <span className="text-sm opacity-70">March 2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Beta Testing</span>
              <span className="text-sm opacity-70">February 2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Development Started</span>
              <span className="text-sm opacity-70">January 2024</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <a href="#" className="text-blue-300 hover:underline text-base inline-flex items-center">
            Visit Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    )
  },
  {
    id: 'project3',
    title: 'Design System',
    preview: 'A minimalist design system for modern web applications',
    date: 'December 2023',
    content: (
      <div className="space-y-6">
        <p className="text-base">
          A comprehensive design system that provides consistent UI components and guidelines
          for building modern web applications.
        </p>
        <div className="bg-green-500 bg-opacity-20 rounded-lg p-4 border border-green-400 border-opacity-30">
          <h4 className="font-medium text-green-300 mb-2 text-lg">Components</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Typography system</li>
            <li>Color palette with accessibility ratings</li>
            <li>Form elements and validation</li>
            <li>Navigation components</li>
            <li>Data visualization tools</li>
          </ul>
        </div>
        <div className="mt-6">
          <a href="#" className="text-blue-300 hover:underline text-base inline-flex items-center">
            Explore Components
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    )
  }
];

const ProjectsContent = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  return (
    <div className="flex h-full">
      {/* Left sidebar - Project list */}
      <div className="w-1/3 border-r border-white border-opacity-10 overflow-y-auto bg-blue-600 bg-opacity-20 h-full">
        <div className="p-4 border-b border-white border-opacity-10">
          <h2 className="text-xl font-bold">My Projects</h2>
        </div>
        <div className="h-[calc(100%-57px)]">
          {projectsData.map(project => (
            <div 
              key={project.id}
              className={`px-4 py-3 cursor-pointer transition-colors border-b border-white border-opacity-5 ${
                selectedProject.id === project.id 
                  ? 'bg-blue-500 bg-opacity-30' 
                  : 'hover:bg-white hover:bg-opacity-5'
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="font-medium text-base">{project.title}</div>
              <div className="text-sm text-white text-opacity-70 flex justify-between mt-1">
                <span className="truncate mr-2">{project.preview}</span>
                <span className="whitespace-nowrap">{project.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right pane - Project details */}
      <div className="w-2/3 overflow-y-auto bg-blue-600 bg-opacity-10 h-full flex flex-col">
        <div className="p-4 border-b border-white border-opacity-10">
          <h2 className="text-xl font-bold">{selectedProject.title}</h2>
          <div className="text-sm text-white text-opacity-70 mt-1">{selectedProject.date}</div>
        </div>
        <div className="p-6 flex-grow">
          {selectedProject.content}
        </div>
      </div>
    </div>
  );
};

const ContactContent = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Contact Me</h2>
    <p>
      I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
    </p>
    <div className="space-y-2 mt-4">
      <div className="flex items-center">
        <span className="w-20 opacity-80">Email:</span>
        <a href="mailto:hello@example.com" className="text-blue-300 hover:underline">hello@example.com</a>
      </div>
      <div className="flex items-center">
        <span className="w-20 opacity-80">GitHub:</span>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">github.com/username</a>
      </div>
      <div className="flex items-center">
        <span className="w-20 opacity-80">LinkedIn:</span>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">linkedin.com/in/username</a>
      </div>
    </div>
  </div>
);

// Window types
type WindowType = 'about' | 'projects' | 'contact';

const Desktop: React.FC = () => {
  // Track open windows
  const [openWindows, setOpenWindows] = useState<{
    about: boolean;
    projects: boolean;
    contact: boolean;
  }>({
    about: false,
    projects: false,
    contact: false,
  });

  // Track active window and z-index order
  const [activeWindow, setActiveWindow] = useState<WindowType | null>(null);
  const [zIndexOrder, setZIndexOrder] = useState<WindowType[]>([]);

  // Current time state
  const [currentTime, setCurrentTime] = useState<string>('');
  
  // Greeting state
  const [greeting, setGreeting] = useState<string>('');

  // Dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Track icon positions
  const [iconPositions, setIconPositions] = useState({
    about: { x: 0, y: 0 },
    projects: { x: 0, y: 0 },
    contact: { x: 0, y: 0 },
  });

  // Track if trash bin is active (icon hovering over it)
  const [trashActive, setTrashActive] = useState(false);

  // Right-click menu state
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
  }>({
    visible: false,
    x: 0,
    y: 0,
  });

  // Selection box state
  const [selectionBox, setSelectionBox] = useState<{
    visible: boolean;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  }>({
    visible: false,
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
  });

  // Error message state
  const [errorMessage, setErrorMessage] = useState<{
    visible: boolean;
    message: string;
  }>({
    visible: false,
    message: '',
  });

  // Add selected icons state
  const [selectedIcons, setSelectedIcons] = useState<Element[]>([]);

  // Refs for desktop icons and trash bin
  const desktopIconsRef = useRef<HTMLDivElement>(null);
  const trashBinRef = useRef<HTMLDivElement>(null);

  // Toggle window open/closed
  const toggleWindow = (window: WindowType) => {
    setOpenWindows((prev) => {
      const newState = {
        ...prev,
        [window]: !prev[window],
      };
      
      // If opening a window, make it active and bring to front
      if (!prev[window]) {
        setActiveWindow(window);
        
        // Update z-index order
        setZIndexOrder(prevOrder => {
          // Remove the window if it's already in the order
          const filteredOrder = prevOrder.filter(w => w !== window);
          // Add it to the front
          return [window, ...filteredOrder];
        });
      } else if (window === activeWindow) {
        // If closing the active window, set the next window as active
        const nextActive = zIndexOrder.find(w => w !== window && newState[w]) || null;
        setActiveWindow(nextActive);
        
        // Remove from z-index order
        setZIndexOrder(prevOrder => prevOrder.filter(w => w !== window));
      }
      
      return newState;
    });
  };

  // Bring a window to the front
  const bringToFront = (window: WindowType) => {
    if (openWindows[window]) {
      setActiveWindow(window);
      setZIndexOrder(prev => {
        // Remove the window from its current position
        const newOrder = prev.filter(w => w !== window);
        // Add it to the front
        return [window, ...newOrder];
      });
    }
  };

  // Get z-index for a window
  const getZIndex = (window: WindowType): number => {
    const index = zIndexOrder.indexOf(window);
    if (index === -1) return 10; // Default z-index if not in order
    // Base z-index is 10, top window gets 50
    return index === 0 ? 50 : 10 + (zIndexOrder.length - index);
  };

  // Handle right click for context menu
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
    });
  };

  // Handle mouse down for selection box
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only start selection if left mouse button is pressed and not on an icon or window
    if (e.button === 0 && e.target === e.currentTarget) {
      // Clear selected icons if clicking on empty space
      if (selectedIcons.length > 0) {
        selectedIcons.forEach(icon => {
          icon.classList.remove('selected-icon');
        });
        setSelectedIcons([]);
      }
      
      setSelectionBox({
        visible: true,
        startX: e.clientX,
        startY: e.clientY,
        endX: e.clientX,
        endY: e.clientY,
      });
    }
  };

  // Handle mouse move for selection box
  const handleMouseMove = (e: React.MouseEvent) => {
    if (selectionBox.visible) {
      const newEndX = e.clientX;
      const newEndY = e.clientY;
      
      setSelectionBox({
        ...selectionBox,
        endX: newEndX,
        endY: newEndY,
      });
      
      // Check for intersections with icons during drag
      if (desktopIconsRef.current) {
        const selectionRect = {
          left: Math.min(selectionBox.startX, newEndX),
          top: Math.min(selectionBox.startY, newEndY),
          right: Math.max(selectionBox.startX, newEndX),
          bottom: Math.max(selectionBox.startY, newEndY),
        };
        
        const icons = desktopIconsRef.current.querySelectorAll('.desktop-icon');
        icons.forEach((icon) => {
          const rect = icon.getBoundingClientRect();
          const isIntersecting = 
            rect.left < selectionRect.right &&
            rect.right > selectionRect.left &&
            rect.top < selectionRect.bottom &&
            rect.bottom > selectionRect.top;
          
          if (isIntersecting) {
            icon.classList.add('selected-icon');
          } else {
            icon.classList.remove('selected-icon');
          }
        });
      }
    }
  };

  // Handle mouse up for selection box
  const handleMouseUp = () => {
    if (selectionBox.visible) {
      // Save the currently selected icons
      if (desktopIconsRef.current) {
        const selectedElements = desktopIconsRef.current.querySelectorAll('.selected-icon');
        setSelectedIcons(Array.from(selectedElements));
      }

      // Check if trash bin is in selection
      if (trashBinRef.current) {
        const trashRect = trashBinRef.current.getBoundingClientRect();
        const selectionRect = {
          left: Math.min(selectionBox.startX, selectionBox.endX),
          top: Math.min(selectionBox.startY, selectionBox.endY),
          right: Math.max(selectionBox.startX, selectionBox.endX),
          bottom: Math.max(selectionBox.startY, selectionBox.endY),
        };
        
        if (
          selectionRect.left < trashRect.right &&
          selectionRect.right > trashRect.left &&
          selectionRect.top < trashRect.bottom &&
          selectionRect.bottom > trashRect.top
        ) {
          handleTrashInteraction();
        }
      }

      // Reset selection box
      setSelectionBox({
        ...selectionBox,
        visible: false,
      });
    }
  };
  
  // Check if an icon is over the trash bin
  const isOverTrashBin = (iconPosition: { x: number; y: number }) => {
    if (!trashBinRef.current) return false;
    
    const trashRect = trashBinRef.current.getBoundingClientRect();
    const desktopRect = document.querySelector('.min-h-screen')?.getBoundingClientRect() || { left: 0, top: 0 };
    
    // Calculate absolute position of the icon relative to the viewport
    // Using more accurate positioning with icon dimensions (80px width/height)
    const iconWidth = 80;
    const iconHeight = 80;
    const iconCenterX = desktopRect.left + iconPosition.x + (iconWidth / 2);
    const iconCenterY = desktopRect.top + iconPosition.y + (iconHeight / 2);
    
    // Debug logs to help identify position issues (can be removed later)
    console.log("Icon position:", iconCenterX, iconCenterY);
    console.log("Trash position:", trashRect.left, trashRect.top, trashRect.right, trashRect.bottom);
    
    return (
      iconCenterX >= trashRect.left &&
      iconCenterX <= trashRect.right &&
      iconCenterY >= trashRect.top &&
      iconCenterY <= trashRect.bottom
    );
  };

  // Handle icon drag
  const handleIconDrag = (window: WindowType, info: any) => {
    // Get the current position of the icon
    const currentPosition = iconPositions[window];
    
    // Calculate current drag position with delta values for real-time positioning
    const dragPosition = {
      x: currentPosition.x + info.delta.x,
      y: currentPosition.y + info.delta.y
    };
    
    // Update position in real-time for smoother dragging
    setIconPositions(prev => ({
      ...prev,
      [window]: dragPosition
    }));
    
    // Check if icon is over trash bin and update trash active state
    const isTrash = isOverTrashBin(dragPosition);
    setTrashActive(isTrash);
  };

  // Handle icon drag end
  const handleIconDragEnd = (window: WindowType, info: any) => {
    // Get the final position directly from the current state
    const currentPosition = iconPositions[window];
    
    // Check if icon is over trash bin
    const isTrash = isOverTrashBin(currentPosition);
    
    // If over trash bin, show gag prompt
    if (isTrash) {
      handleTrashInteraction();
    }
    
    // Reset trash active state
    setTrashActive(false);
  };

  // Extract trash interaction logic to a separate function
  const handleTrashInteraction = () => {
    // Animate trash bin
    if (trashBinRef.current) {
      trashBinRef.current.classList.add('trash-shake');
      setTimeout(() => {
        if (trashBinRef.current) {
          trashBinRef.current.classList.remove('trash-shake');
        }
      }, 1000);
    }
    
    // Show error message with random humor
    const errorMessages = [
      "Nice try! You can't delete my life's work that easily. Did you think you were being funny?",
      "ERROR: Cannot delete portfolio. Reason: It took way too long to build.",
      "Whoa there! Those icons have families! Think of the little pixel children!",
      "I see what you did there. Very clever. But my portfolio shall live on!",
      "Task failed successfully: Your attempt to delete my work has been logged and will be remembered forever."
    ];
    
    const randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    
    setErrorMessage({
      visible: true,
      message: randomMessage,
    });

    // Make error message more noticeable with longer display time
    setTimeout(() => {
      setErrorMessage({
        visible: false,
        message: '',
      });
    }, 6000); // Increased from 5000ms to 6000ms
  };

  // Update the useEffect hook that uses handleClickOutside
  useEffect(() => {
    // Move handleClickOutside inside the useEffect
    const handleClickOutside = () => {
      if (contextMenu.visible) {
        setContextMenu(prevState => ({
          ...prevState,
          visible: false,
        }));
      }
    };

    const handleDocumentClick = () => {
      handleClickOutside();
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [contextMenu.visible]);

  // Add this at the end of the component, just before the return statement
  useEffect(() => {
    // Add CSS for selected icons and trash animation
    const style = document.createElement('style');
    style.innerHTML = `
      .selected-icon {
        outline: 2px solid rgba(59, 130, 246, 0.8);
        background-color: rgba(59, 130, 246, 0.2);
        border-radius: 4px;
      }
      .trash-shake {
        animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
      }
      @keyframes shake {
        10%, 90% { transform: translate3d(-1px, 0, 0); }
        20%, 80% { transform: translate3d(2px, 0, 0); }
        30%, 50%, 70% { transform: translate3d(-3px, 0, 0); }
        40%, 60% { transform: translate3d(3px, 0, 0); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Add time update effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      // Format time in 12-hour format with AM/PM
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12; // Convert 0 to 12 for 12 AM
      const formattedTime = `${hours12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
      
      setCurrentTime(formattedTime);
      
      // Update greeting based on time of day
      if (hours >= 5 && hours < 12) {
        setGreeting('Good morning');
      } else if (hours >= 12 && hours < 17) {
        setGreeting('Good afternoon');
      } else if (hours >= 17 && hours < 22) {
        setGreeting('Good evening');
      } else {
        setGreeting('Good night');
      }
    };
    
    // Update time immediately
    updateTime();
    
    // Update time every minute
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  // Apply dark mode on initial load if user prefers it
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <div 
      className="min-h-screen p-8 relative overflow-hidden"
      onContextMenu={handleRightClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={(e) => {
        // Clear selection when clicking on desktop background
        if (e.target === e.currentTarget && selectedIcons.length > 0) {
          selectedIcons.forEach(icon => {
            icon.classList.remove('selected-icon');
          });
          setSelectedIcons([]);
        }
      }}
    >
      {/* Time-based Greeting */}
      <motion.div
        className="fixed top-6 left-0 right-0 mx-auto w-auto max-w-max z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          delay: 0.7 
        }}
      >
        <motion.div 
          className="text-white text-opacity-90 bg-black bg-opacity-30 backdrop-blur-sm px-5 py-2 rounded-full text-center flex items-center justify-center h-10"
          whileHover={{ scale: 1.05 }}
        >
          <motion.p 
            className="text-lg font-medium m-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            {greeting}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Jack Landis Name Header - Move to top of screen */}
      <motion.div 
        className="fixed top-6 right-6 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          delay: 0.5 
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="flex items-center justify-end space-x-3 mb-1">
              <motion.div 
                className="text-sm text-white text-opacity-80 bg-black bg-opacity-30 backdrop-blur-sm px-3 py-1 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {currentTime}
              </motion.div>
              <motion.div 
                className="text-sm text-white text-opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <motion.div 
                className="text-sm text-white text-opacity-80 cursor-pointer hover:text-yellow-300 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </motion.div>
            </div>
            <motion.h1 
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ letterSpacing: "0px" }}
              animate={{ letterSpacing: "0.5px" }}
              transition={{ duration: 1, delay: 1 }}
            >
              Jack Landis
            </motion.h1>
            <motion.p 
              className="text-xs text-white text-opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Developer & Designer
            </motion.p>
          </div>
          {/* Replace JL circle with profile picture */}
          <motion.div 
            className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image 
              src="/prof.png" 
              alt="Jack Landis" 
              width={48} 
              height={48}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Desktop Icons */}
      <div 
        ref={desktopIconsRef} 
        className="fixed top-8 left-8 z-5"
      >
        <motion.div style={{ x: iconPositions.about.x, y: iconPositions.about.y }}>
          <DesktopIcon
            id="about-icon"
            icon="👤"
            label="About"
            onClick={() => toggleWindow('about')}
            onDrag={(info) => handleIconDrag('about', info)}
            onDragEnd={(info) => handleIconDragEnd('about', info)}
            className="desktop-icon"
          />
        </motion.div>
        <div style={{ height: '24px' }}></div>
        <motion.div style={{ x: iconPositions.projects.x, y: iconPositions.projects.y }}>
          <DesktopIcon
            id="projects-icon"
            icon="💼"
            label="Projects"
            onClick={() => toggleWindow('projects')}
            onDrag={(info) => handleIconDrag('projects', info)}
            onDragEnd={(info) => handleIconDragEnd('projects', info)}
            className="desktop-icon"
          />
        </motion.div>
        <div style={{ height: '24px' }}></div>
        <motion.div style={{ x: iconPositions.contact.x, y: iconPositions.contact.y }}>
          <DesktopIcon
            id="contact-icon"
            icon="✉️"
            label="Contact"
            onClick={() => toggleWindow('contact')}
            onDrag={(info) => handleIconDrag('contact', info)}
            onDragEnd={(info) => handleIconDragEnd('contact', info)}
            className="desktop-icon"
          />
        </motion.div>
      </div>

      {/* Trash Bin */}
      <motion.div 
        ref={trashBinRef}
        className={`fixed bottom-8 right-8 flex flex-col items-center cursor-pointer z-5 transition-all duration-300 ${trashActive ? 'scale-110' : ''}`}
        animate={{
          scale: trashActive ? 1.2 : 1,
          backgroundColor: trashActive ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0)',
          borderRadius: '8px',
          padding: trashActive ? '8px' : '4px',
          boxShadow: trashActive ? '0 0 15px rgba(255, 0, 0, 0.5)' : 'none'
        }}
      >
        <div className={`text-4xl mb-2 bg-black bg-opacity-10 backdrop-blur-sm w-16 h-16 flex items-center justify-center rounded-lg shadow-sm transition-all duration-300 ${trashActive ? 'bg-red-500 bg-opacity-40 text-5xl' : ''}`}>🗑️</div>
        <div className={`text-xs text-center px-2 py-1 rounded backdrop-blur-sm transition-all duration-300 ${trashActive ? 'bg-red-600 bg-opacity-50 text-white font-bold' : 'bg-black bg-opacity-30 text-white'}`}>Trash</div>
      </motion.div>

      {/* Windows */}
      <AnimatePresence>
        {openWindows.about && (
          <Window
            key="about-window"
            title="About"
            isOpen={openWindows.about}
            onClose={() => toggleWindow('about')}
            initialPosition={{ x: 100, y: 50 }}
            isActive={activeWindow === 'about'}
            zIndex={getZIndex('about')}
            onFocus={() => bringToFront('about')}
          >
            <AboutContent />
          </Window>
        )}

        {openWindows.projects && (
          <Window
            key="projects-window"
            title="Projects"
            isOpen={openWindows.projects}
            onClose={() => toggleWindow('projects')}
            initialPosition={{ x: 150, y: 80 }}
            isActive={activeWindow === 'projects'}
            zIndex={getZIndex('projects')}
            onFocus={() => bringToFront('projects')}
            width="900px"
            height="600px"
            noPadding={true}
          >
            <ProjectsContent />
          </Window>
        )}

        {openWindows.contact && (
          <Window
            key="contact-window"
            title="Contact"
            isOpen={openWindows.contact}
            onClose={() => toggleWindow('contact')}
            initialPosition={{ x: 200, y: 110 }}
            isActive={activeWindow === 'contact'}
            zIndex={getZIndex('contact')}
            onFocus={() => bringToFront('contact')}
          >
            <ContactContent />
          </Window>
        )}
      </AnimatePresence>

      {/* Context Menu */}
      {contextMenu.visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="fixed bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden z-50 w-64"
          style={{ 
            left: `${contextMenu.x}px`, 
            top: `${contextMenu.y}px`,
            transformOrigin: 'top left'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-bold text-white">Jack Landis</h3>
            <p className="text-sm text-gray-300">Developer & Designer</p>
          </div>
          <div className="p-2">
            <a 
              href="https://github.com/jacklandis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors text-white"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/jacklandis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors text-white"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="https://twitter.com/jacklandis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors text-white"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </a>
            <a 
              href="mailto:jack@example.com" 
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors text-white"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
              Email
            </a>
          </div>
        </motion.div>
      )}

      {/* Selection Box */}
      {selectionBox.visible && (
        <div
          className="absolute border border-blue-400 bg-blue-400 bg-opacity-20 pointer-events-none z-40"
          style={{
            left: Math.min(selectionBox.startX, selectionBox.endX),
            top: Math.min(selectionBox.startY, selectionBox.endY),
            width: Math.abs(selectionBox.endX - selectionBox.startX),
            height: Math.abs(selectionBox.endY - selectionBox.startY),
          }}
        />
      )}

      {/* Error Message */}
      <AnimatePresence>
        {errorMessage.visible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 max-w-md text-center"
            style={{ boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)' }}
          >
            <div className="text-2xl mb-2">⚠️</div>
            <p className="font-medium">{errorMessage.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Footer */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-30 backdrop-blur-sm px-6 py-2 rounded-full text-white text-opacity-70 text-sm">
        © {new Date().getFullYear()} • Jack Landis • Made with ❤️
      </div>
    </div>
  );
};

export default Desktop; 