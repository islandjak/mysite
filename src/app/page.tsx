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
        <h1 className="text-2xl font-bold mb-3">Hey, I'm Jack</h1>
        <p className="text-[15px] text-gray-700 dark:text-gray-300">
          I'm a software engineer, writer, and creator. I build things for the web and share what I learn along the way.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-xl font-normal mb-4">What I'm Working On</h2>
        <ul className="space-y-3">
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            • Building Just My Beer - A platform to catalog and discover craft beers
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            • Developing my personal website using Next.js and modern web technologies
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            • Learning and implementing best practices in web development at Deloitte
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            • Exploring new technologies in the D.C. tech community
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-normal mb-4">Recent Writing</h2>
        <div className="space-y-3">
          <Link 
            href="/writing/building-just-my-beer"
            className="block text-[15px] text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
          >
            Building Just My Beer: A Journey of Data, Design, and User Experience
          </Link>
          <Link 
            href="/writing/building-personal-website-nextjs"
            className="block text-[15px] text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
          >
            Building a Personal Website with Next.js
          </Link>
          <Link 
            href="/writing/modern-web-development-practices"
            className="block text-[15px] text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
          >
            Modern Web Development Best Practices
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Where</h2>
        <div className="rounded-lg overflow-hidden relative aspect-[1.91/1] bg-gray-100 dark:bg-gray-800">
          <Image
            src="/map.png"
            alt="Washington D.C. Map"
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

      <section className="mb-16">
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

      <section>
        <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Lists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[15px] font-medium mb-3">Movies</h3>
            <ol className="space-y-2">
              {[
                'Princess Bride',
                'Arrival',
                'Annihilation',
                'The Social Network',
                'The Dark Knight',
              ].map((movie, index) => (
                <li key={movie} className="text-[14px] text-gray-700 dark:text-gray-300 flex items-start">
                  <span className="font-medium mr-2 text-gray-900 dark:text-white">{index + 1}.</span>
                  <span>{movie}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-[15px] font-medium mb-3">TV Shows</h3>
            <ol className="space-y-2">
              {[
                'LOST',
                'Avatar: The Last Airbender',
                'Succession',
                'Severance',
                'Invincible'
              ].map((show, index) => (
                <li key={show} className="text-[14px] text-gray-700 dark:text-gray-300 flex items-start">
                  <span className="font-medium mr-2 text-gray-900 dark:text-white">{index + 1}.</span>
                  <span>{show}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-[15px] font-medium mb-3">Books</h3>
            <ol className="space-y-2">
              {[
                'The Pragmatic Programmer',
                'Clean Code',
                'Design Patterns',
                'Zero to One',
                'The Lean Startup'
              ].map((book, index) => (
                <li key={book} className="text-[14px] text-gray-700 dark:text-gray-300 flex items-start">
                  <span className="font-medium mr-2 text-gray-900 dark:text-white">{index + 1}.</span>
                  <span>{book}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
