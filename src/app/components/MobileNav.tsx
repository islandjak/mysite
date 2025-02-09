'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 p-2 z-50 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      {/* Slide-out navigation */}
      <div 
        className={`fixed inset-y-0 left-0 w-[280px] bg-gray-50/90 dark:bg-neutral-900/90 border-r border-gray-100 dark:border-neutral-800 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div onClick={closeMenu}>
          <Navigation />
        </div>
      </div>
    </>
  );
} 