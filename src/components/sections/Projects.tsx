
import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { Layers, Code, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  ];

  return (
    <section className="mb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Latest Projects</h2>
        <Link to="/projects" className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </section>
  );
};

export default Projects;
