"use client";

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';
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
  
  // Dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Chat state
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [chatInput, setChatInput] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([
    { role: 'assistant', content: 'Hello! I\'m Jack.AI, your personal assistant. How can I help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [chatPosition, setChatPosition] = useState<{ x: number | null, y: number | null }>({ x: null, y: null });
  const [isDragging, setIsDragging] = useState(false);

  // Refs for auto-scrolling chat
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatHeaderRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Chat submission handler
  const handleChatSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!chatInput.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user' as const, content: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Prepare messages for OpenAI API
      const apiMessages = [
        { role: 'system', content: 'You are Jack.AI, a helpful and friendly AI assistant created by Jack Landis. You are knowledgeable, creative, and have a touch of humor. Keep responses concise and engaging.' },
        ...chatMessages.map(msg => ({ 
          role: msg.role, 
          content: msg.content 
        })),
        { role: 'user', content: userMessage.content }
      ];
      
      // In production, this would call the OpenAI API
      // For now, we'll simulate the API call
      setTimeout(() => {
        let response;
        
        // Check if we're in development or if API key is not set
        if (process.env.NODE_ENV === 'development' || !process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
          // Simulate response in development
          const responses = [
            "I'm here to help with whatever you need!",
            "That's an interesting question. Let me think about it...",
            "I'd be happy to assist with that.",
            "I'm still learning, but I'll do my best to help you.",
            "Thanks for chatting with me! What else would you like to know?",
            "I'm Jack.AI, ready to make your day easier.",
          ];
          
          response = responses[Math.floor(Math.random() * responses.length)];
        } else {
          // In production with valid API key, this would call the OpenAI API
          // This code is just a placeholder and won't run in the current setup
          /*
          const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: apiMessages,
              temperature: 0.7,
              max_tokens: 150
            })
          });
          
          const data = await openaiResponse.json();
          response = data.choices[0].message.content;
          */
          
          // For now, just use a random response
          const responses = [
            "I'm here to help with whatever you need!",
            "That's an interesting question. Let me think about it...",
            "I'd be happy to assist with that.",
            "I'm still learning, but I'll do my best to help you.",
            "Thanks for chatting with me! What else would you like to know?",
            "I'm Jack.AI, ready to make your day easier.",
          ];
          
          response = responses[Math.floor(Math.random() * responses.length)];
        }
        
        // Add assistant response
        setChatMessages(prev => [...prev, { 
          role: 'assistant', 
          content: response 
        }]);
        
        // Hide typing indicator
        setIsTyping(false);
      }, 1000);
      
    } catch (error) {
      console.error("Error in chat:", error);
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm sorry, I encountered an error. Please try again." 
      }]);
      setIsTyping(false);
    }
  };

  // Handle chat drag start
  const handleChatDragStart = () => {
    setIsDragging(true);
  };

  // Handle chat drag end
  const handleChatDragEnd = (info: any) => {
    if (info.offset) {
      setChatPosition({
        x: (chatPosition.x || 0) + info.offset.x,
        y: (chatPosition.y || 0) + info.offset.y
      });
    }
    setIsDragging(false);
  };

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

  // Update time update effect
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
    >
      {/* Jack.AI Chat Interface - Grok Inspired */}
      <motion.div
        className="fixed z-20"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          x: chatPosition.x !== null ? chatPosition.x : "-50%",
          top: chatPosition.y !== null ? chatPosition.y : "1.5rem",
          left: chatPosition.x !== null ? chatPosition.x : "50%",
        }}
        transition={{ 
          type: "tween", 
          duration: 0.2
        }}
        drag={chatOpen}
        dragMomentum={false}
        onDragStart={handleChatDragStart}
        onDragEnd={handleChatDragEnd}
        style={{ 
          touchAction: "none",
          width: chatOpen ? "400px" : "auto",
          maxWidth: "90vw"
        }}
      >
        <motion.div 
          className={`text-white bg-black bg-opacity-70 rounded-xl overflow-hidden shadow-lg ${
            isDragging ? 'ring-2 ring-blue-500' : ''
          }`}
          layout
          transition={{
            layout: {
              type: "tween",
              duration: 0.15
            }
          }}
        >
          {/* Chat Header */}
          <div 
            className={`px-4 py-3 flex items-center justify-between border-b border-gray-700 ${chatOpen ? 'cursor-move' : 'cursor-pointer'}`}
            onClick={!chatOpen ? () => setChatOpen(true) : undefined}
          >
            <div className="flex items-center">
              <div
                className={`w-6 h-6 mr-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold ${isTyping ? 'animate-pulse' : ''}`}
              >
                X
              </div>
              <p className="text-base font-medium">Jack.AI</p>
            </div>
            
            {chatOpen && (
              <button
                className="text-gray-400 hover:text-white focus:outline-none transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setChatOpen(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 8 5.293 4.707a1 1 0 011.414-1.414L10 6.586l3.293-3.293a1 1 0 011.414 1.414L11.414 8l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>

          {/* Chat Container */}
          {chatOpen && (
            <div className="flex flex-col h-[350px]">
              {/* Messages Area */}
              <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-900"
              >
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} w-full animate-fadeIn`}
                  >
                    <div 
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                        msg.role === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-800 text-gray-100'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start w-full">
                    <div className="bg-gray-800 rounded-2xl px-4 py-2 flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-3 bg-gray-800 border-t border-gray-700">
                <form onSubmit={handleChatSubmit} className="flex">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Message Jack.AI..."
                    className="flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-r-lg px-3 hover:bg-blue-700 transition-colors"
                    disabled={!chatInput.trim()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          )}
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
      <div className="fixed top-8 left-8 z-5 space-y-6">
        <DesktopIcon
          id="about-icon"
          icon="👤"
          label="About"
          onClick={() => toggleWindow('about')}
          className="desktop-icon"
        />
        
        <DesktopIcon
          id="projects-icon"
          icon="💼"
          label="Projects"
          onClick={() => toggleWindow('projects')}
          className="desktop-icon"
        />
        
        <DesktopIcon
          id="contact-icon"
          icon="✉️"
          label="Contact"
          onClick={() => toggleWindow('contact')}
          className="desktop-icon"
        />
      </div>

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

      {/* Add CSS for the chat interface */}
      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(59, 130, 246, 0.5);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(59, 130, 246, 0.7);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>

      {/* Desktop Footer */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-30 backdrop-blur-sm px-6 py-2 rounded-full text-white text-opacity-70 text-sm">
        © {new Date().getFullYear()} • Jack Landis • Made with ❤️
      </div>
    </div>
  );
};

export default Desktop; 