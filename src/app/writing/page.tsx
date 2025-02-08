import Link from 'next/link';

const posts = [
  {
    title: 'Building a Personal Website with Next.js',
    date: 'March 8, 2024',
    slug: 'building-personal-website-nextjs',
    description: 'A detailed look at how I built this website using Next.js, Tailwind CSS, and other modern web technologies.',
  },
  {
    title: 'The Power of Consistent Design Systems',
    date: 'March 1, 2024',
    slug: 'power-of-consistent-design-systems',
    description: 'Exploring how design systems can improve development speed and maintain consistency across projects.',
  },
  {
    title: 'Modern Web Development Best Practices',
    date: 'February 25, 2024',
    slug: 'modern-web-development-practices',
    description: 'A comprehensive guide to current best practices in web development, from performance to accessibility.',
  },
];

export default function Writing() {
  return (
    <div>
      <h1 className="text-xl font-normal mb-2">Writing</h1>
      <p className="text-[15px] text-gray-600 dark:text-gray-400">
        Thoughts on software development, design, and technology.
      </p>
    </div>
  );
} 