
import React from 'react';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Blog from '@/components/sections/Blog';

const Index = () => {
  return (
    <div className="transition-all duration-300">
      <Hero 
        title="Hi, welcome to my site."
        subtitle="I'm working on creating innovative solutions through design and development, focused on user experience and performance."
      />
      <Projects />
      <Blog />
    </div>
  );
};

export default Index;
