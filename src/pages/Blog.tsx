
import React from 'react';
import BlogPost from '@/components/ui/BlogPost';
import { Rocket, Accessibility, Code, Lightbulb, Cpu, Lock } from 'lucide-react';

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
    {
      id: 3,
      title: 'Understanding Modern JavaScript',
      excerpt: 'A deep dive into the latest features and patterns in JavaScript development.',
      date: 'Feb 28, 2025',
      readTime: '9 min read',
      icon: <Code className="w-5 h-5" />,
      link: '/blog/modern-javascript',
    },
    {
      id: 4,
      title: 'Design Systems: A Comprehensive Guide',
      excerpt: 'How to create and maintain effective design systems for scalable products.',
      date: 'Feb 15, 2025',
      readTime: '10 min read',
      icon: <Lightbulb className="w-5 h-5" />,
      link: '/blog/design-systems',
    },
    {
      id: 5,
      title: 'The Rise of AI in UX Design',
      excerpt: 'How artificial intelligence is transforming user experience design practices.',
      date: 'Jan 30, 2025',
      readTime: '6 min read',
      icon: <Cpu className="w-5 h-5" />,
      link: '/blog/ai-ux-design',
    },
    {
      id: 6,
      title: 'Web Security Essentials',
      excerpt: 'Key security practices every web developer should implement.',
      date: 'Jan 12, 2025',
      readTime: '8 min read',
      icon: <Lock className="w-5 h-5" />,
      link: '/blog/web-security',
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 animate-fade-in">Blog</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
        Thoughts, insights, and discussions about design, development, and digital experiences.
      </p>
      
      <div className="grid grid-cols-1 gap-6">
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
    </div>
  );
};

export default Blog;
