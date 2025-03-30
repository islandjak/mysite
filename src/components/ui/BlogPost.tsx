
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type BlogPostProps = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  icon: React.ReactNode;
  link?: string;
  className?: string;
}

const BlogPost = ({
  title,
  excerpt,
  date,
  readTime,
  icon,
  link = '#',
  className,
}: BlogPostProps) => {
  return (
    <Link 
      to={link}
      className={cn(
        "block p-6 glass-card group transition-all duration-300 hover:shadow-md animate-fade-in",
        className
      )}
    >
      <div className="flex gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/50">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span>{readTime}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          <p className="text-muted-foreground">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
