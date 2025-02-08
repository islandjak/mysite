import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const workHistory = [
  {
    company: 'Deloitte',
    role: 'Analyst',
    period: '2024—',
  },
  {
    company: 'Previous Company',
    role: 'Frontend Developer',
    period: '2021—23',
  },
];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-12">
      <div className="mb-16">
        <h1 className="text-2xl font-normal mb-3">Hey, I&apos;m Jack</h1>
        <p className="text-[15px] text-gray-700 dark:text-gray-300">
          I&apos;m a software engineer, writer, and creator. I build things for the web and share what I learn along the way.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-xl font-normal mb-4">What I&apos;m Working On</h2>
        <ul className="space-y-3">
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Building this personal website with Next.js
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Writing about software development and design
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Contributing to open source projects
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-normal mb-4">Recent Writing</h2>
        <div className="space-y-3">
          <Link 
            href="/writing/how-i-built-this-site"
            className="block text-[15px] text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
          >
            How I Built This Site
          </Link>
          <Link 
            href="/writing/my-development-setup"
            className="block text-[15px] text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
          >
            My Development Setup
          </Link>
          <Link 
            href="/writing/modern-web-development"
            className="block text-[15px] text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
          >
            Thoughts on Modern Web Development
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Online</h2>
        <div className="grid grid-cols-2 gap-4">
          {['Twitter', 'Threads', 'YouTube', 'GitHub', 'Figma'].map((platform) => (
            <div key={platform} className="flex items-center justify-between text-[15px] text-gray-700 dark:text-gray-300">
              <span>{platform}</span>
              <span className="text-gray-500">Follow</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Where</h2>
        <div className="rounded-lg overflow-hidden relative aspect-[1.91/1] bg-gray-100 dark:bg-gray-800">
          <Image
            src="/map.png"
            alt="San Francisco Map"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="mt-2 flex items-center text-[15px] text-gray-700 dark:text-gray-300">
          <MapPin className="w-4 h-4 mr-1" />
          <span>Washington, D.C.</span>
        </div>
      </section>

      <section>
        <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Work</h2>
        <div className="space-y-4">
          {workHistory.map((job) => (
            <div key={job.company} className="flex items-center justify-between text-[15px]">
              <div>
                <span className="text-gray-900 dark:text-white">{job.company}</span>
                <span className="mx-2 text-gray-400">·</span>
                <span className="text-gray-700 dark:text-gray-300">{job.role}</span>
              </div>
              <span className="text-gray-500">{job.period}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
