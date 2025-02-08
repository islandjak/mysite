import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function PersonalSite() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-12">
      <article>
        <header className="mb-8">
          <h1 className="text-2xl font-normal mb-3">Personal Site</h1>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
            A modern, minimalist personal website inspired by Brian Lovin&apos;s design, built with Next.js and Tailwind CSS.
          </p>
          <div className="flex items-center space-x-4">
            <Link 
              href="https://github.com/jacklandis/personal-site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
            >
              View Source
              <ArrowUpRight className="ml-1 w-3 h-3" />
            </Link>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-normal mb-4">About</h2>
          <div className="prose dark:prose-invert">
            <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              This personal website serves as a digital garden for my projects, writing, and online presence. 
              Inspired by Brian Lovin's clean and functional design, I built this site to showcase my work 
              and share my thoughts on software development, design, and technology.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
            Tech Stack
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            {[
              'Next.js 14',
              'TypeScript',
              'Tailwind CSS',
              'Styled Components',
              'Heroicons',
              'Vercel',
            ].map((tech) => (
              <li key={tech} className="text-[15px] text-gray-700 dark:text-gray-300">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
            Key Features
          </h2>
          <ul className="space-y-3">
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Clean, minimalist design with attention to typography
            </li>
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Dark mode support with system preference detection
            </li>
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Responsive layout with optimized mobile experience
            </li>
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Project showcase with detailed case studies
            </li>
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Markdown support for content management
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
            Design Decisions
          </h2>
          <ul className="space-y-3">
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Used Inter font for optimal readability
            </li>
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Implemented precise spacing and typography scale
            </li>
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Created a consistent color palette for light and dark modes
            </li>
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Focused on subtle animations and transitions
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
            Development Timeline
          </h2>
          <div className="space-y-4">
            {[
              { date: 'March 2024', milestone: 'Initial Release' },
              { date: 'March 2024', milestone: 'Design Implementation' },
              { date: 'March 2024', milestone: 'Project Started' },
            ].map((item) => (
              <div key={item.date} className="flex items-center justify-between text-[15px]">
                <span className="text-gray-700 dark:text-gray-300">{item.milestone}</span>
                <span className="text-gray-500">{item.date}</span>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
} 