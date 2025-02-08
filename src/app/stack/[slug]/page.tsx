import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';

const apps = [
  {
    name: 'Cursor',
    description: 'AI-powered code editor built on VS Code',
    longDescription: `Cursor is my go-to code editor for its powerful AI capabilities and familiar VS Code foundation. 
    It helps me write, understand, and refactor code more efficiently with features like:
    
    • AI-powered code completion and generation
    • Smart code navigation and refactoring
    • Built-in chat interface for coding assistance
    • VS Code extension compatibility`,
    icon: '/icons/cursor.png',
    url: 'https://cursor.sh',
    category: 'DEVELOPMENT',
    slug: 'cursor'
  },
  // ... other apps with their long descriptions
];

export default function AppPage({ params }: { params: { slug: string } }) {
  const app = apps.find(app => app.slug === params.slug);
  
  if (!app) {
    notFound();
  }

  return (
    <div>
      <header className="flex items-start justify-between mb-8">
        <div className="flex items-center">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden mr-4 bg-gray-100 dark:bg-neutral-900">
            <Image
              src={app.icon}
              alt={`${app.name} icon`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center">
              <h1 className="text-2xl font-medium">{app.name}</h1>
              <span className="ml-3 text-[12px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                {app.category}
              </span>
            </div>
            <p className="text-[15px] text-gray-700 dark:text-gray-300 mt-1">
              {app.description}
            </p>
          </div>
        </div>
        <Link
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 text-[13px] text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-900 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
        >
          Visit Website
          <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
        </Link>
      </header>

      <div className="prose dark:prose-invert">
        <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {app.longDescription}
        </div>
      </div>
    </div>
  );
} 