
import React from 'react';
import { Layers, Code, Palette, Paintbrush, Globe, Database } from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Mobile App Design',
      description: 'A clean and intuitive interface for a productivity app',
      image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop',
      category: 'UI/UX Design',
      categoryIcon: <Layers className="w-4 h-4" />,
      link: '/projects/mobile-app',
    },
    {
      id: 2,
      title: 'Web Platform',
      description: 'Enterprise-level web application with modern architecture',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
      category: 'Development',
      categoryIcon: <Code className="w-4 h-4" />,
      link: '/projects/web-platform',
    },
    {
      id: 3,
      title: 'Brand Identity',
      description: 'Complete branding solution for tech startup',
      image: 'https://images.unsplash.com/photo-1600508773248-cae38562da7a?q=80&w=2070&auto=format&fit=crop',
      category: 'Branding',
      categoryIcon: <Palette className="w-4 h-4" />,
      link: '/projects/brand-identity',
    },
    {
      id: 4,
      title: 'E-commerce Redesign',
      description: 'Complete overhaul of user experience for online retail',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop',
      category: 'UI/UX Design',
      categoryIcon: <Paintbrush className="w-4 h-4" />,
      link: '/projects/ecommerce-redesign',
    },
    {
      id: 5,
      title: 'Corporate Website',
      description: 'Modern website for a multinational corporation',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1974&auto=format&fit=crop',
      category: 'Web Development',
      categoryIcon: <Globe className="w-4 h-4" />,
      link: '/projects/corporate-website',
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with real-time updates',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      category: 'Full-stack Development',
      categoryIcon: <Database className="w-4 h-4" />,
      link: '/projects/analytics-dashboard',
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 animate-fade-in">Projects</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
        A collection of my work across design, development, and branding. Each project represents a unique challenge and solution.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            className="opacity-0"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards' 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
