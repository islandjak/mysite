
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  categoryIcon: React.ReactNode;
  link?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  category,
  categoryIcon,
  link = '#',
  className,
}: ProjectCardProps) => {
  return (
    <Link 
      to={link}
      className={cn(
        "block glass-card overflow-hidden group transition-all duration-300 hover:shadow-md animate-fade-in",
        className
      )}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {categoryIcon}
          <span>{category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
