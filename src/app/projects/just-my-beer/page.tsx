import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function JustMyBeer() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-12">
      <article>
        <header className="mb-8">
          <h1 className="text-2xl font-normal mb-3">Just My Beer</h1>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
            A personalized beer recommendation app that helps users discover new beers based on their preferences and previous ratings.
          </p>
          <div className="flex items-center space-x-4">
            <Link 
              href="https://github.com/yourusername/just-my-beer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
            >
              View Source
              <ArrowUpRight className="ml-1 w-3 h-3" />
            </Link>
            <Link
              href="https://justmybeer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
            >
              Visit Website
              <ArrowUpRight className="ml-1 w-3 h-3" />
            </Link>
          </div>
        </header>

        <div className="mb-12 rounded-lg overflow-hidden">
          <Image
            src="/justmybeer.png"
            alt="Just My Beer screenshot"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-normal mb-4">About</h2>
          <div className="prose dark:prose-invert">
            <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Just My Beer is a web application that helps beer enthusiasts discover new beers tailored to their taste preferences. 
              Using a combination of machine learning and user ratings, the app creates personalized recommendations and helps users 
              keep track of their beer-tasting journey.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-[13px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
            Tech Stack
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            {[
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Prisma',
              'PostgreSQL',
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
              • Personalized beer recommendations based on user preferences
            </li>
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Beer rating and review system
            </li>
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Detailed beer information and characteristics
            </li>
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Social features for sharing recommendations
            </li>
            <li className="text-[15px] text-gray-700 dark:text-gray-300">
              • Mobile-responsive design
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
              { date: 'February 2024', milestone: 'Beta Testing' },
              { date: 'January 2024', milestone: 'Development Started' },
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