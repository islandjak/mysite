import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

const MainLayout = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  // Update sidebar state when mobile state changes
  useEffect(() => {
    // On mobile, sidebar should be closed by default
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile]);
  
  // Set up automatic dark mode
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    };
    
    // Initial check
    document.documentElement.setAttribute(
      'data-theme', 
      mediaQuery.matches ? 'dark' : 'light'
    );
    
    // Add listener for changes
    mediaQuery.addEventListener('change', handleChange);
    
    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-background relative">
      {/* Sidebar component */}
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      <main 
        className={`flex-1 overflow-auto transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'ml-0 md:ml-60' : 'ml-0'
        }`}
      >
        <div className="container py-8 pt-16 md:pt-8 px-4 md:px-12 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
