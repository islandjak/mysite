
import React from 'react';
import BlogPost from '../ui/BlogPost';
import { Rocket, Accessibility } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      date: 'Mar 15, 2025',
      readTime: '5 min read',
      icon: <Rocket className="w-5 h-5" />,
      link: '/blog/future-web-development',
    },
    {
      id: 2,
      title: 'Designing for Accessibility',
      excerpt: 'Best practices for creating inclusive digital experiences for all users.',
      date: 'Mar 10, 2025',
      readTime: '7 min read',
      icon: <Accessibility className="w-5 h-5" />,
      link: '/blog/designing-accessibility',
    },
  ];

  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Latest Posts</h2>
        <Link to="/blog" className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post, index) => (
          <BlogPost
            key={post.id}
            {...post}
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

export default Blog;
