'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const apps = [
  {
    name: 'Cursor',
    description: 'AI-powered code editor built on VS Code',
    icon: '/icons/cursor.png',
    url: 'https://cursor.sh',
    category: 'DEVELOPMENT',
    slug: 'cursor'
  },
  {
    name: 'VS Code',
    description: 'My primary code editor, customized with vim bindings',
    icon: '/icons/vscode.png',
    url: 'https://code.visualstudio.com',
    category: 'DEVELOPMENT',
    slug: 'vscode'
  },
  {
    name: 'iTerm2',
    description: 'Customized terminal with Oh My Zsh and Starship prompt',
    icon: '/icons/iterm2.png',
    url: 'https://iterm2.com',
    category: 'DEVELOPMENT',
    slug: 'iterm2'
  },
  {
    name: 'Arc',
    description: 'A beautiful and fast browser with great tab management',
    icon: '/icons/arc.png',
    url: 'https://arc.net',
    category: 'PRODUCTIVITY',
    slug: 'arc'
  },
  {
    name: 'Figma',
    description: 'Design tool for all my UI/UX work',
    icon: '/icons/figma.png',
    url: 'https://figma.com',
    category: 'DESIGN',
    slug: 'figma'
  },
  {
    name: 'Raycast',
    description: 'Spotlight replacement with powerful extensions',
    icon: '/icons/raycast.png',
    url: 'https://raycast.com',
    category: 'PRODUCTIVITY',
    slug: 'raycast'
  },
  {
    name: '1Password',
    description: 'Password manager for all my accounts',
    icon: '/icons/1password.png',
    url: 'https://1password.com',
    category: 'SECURITY',
    slug: '1password'
  }
];

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex">
      {/* Secondary Sidebar */}
      <aside className="w-[300px] min-h-screen border-r border-gray-100 dark:border-neutral-800 bg-gray-50/90 dark:bg-neutral-900/90">
        <div className="sticky top-0 overflow-y-auto h-screen">
          <div className="py-8">
            <div className="px-6">
              <header className="mb-8">
                <div className="flex items-center justify-between">
                  <h1 className="text-[18px] font-medium">Stack</h1>
                </div>
                <p className="text-[14px] text-gray-700 dark:text-gray-300 mt-1">
                  Software and tools I use regularly.
                </p>
              </header>

              <div className="space-y-1">
                {apps.map((app) => {
                  const isActive = pathname === `/stack/${app.slug}`;
                  return (
                    <Link 
                      key={app.name}
                      href={`/stack/${app.slug}`}
                      className={`block group ${
                        isActive 
                          ? 'bg-black dark:bg-white px-6 py-3 -mx-6 rounded-md' 
                          : 'py-1 hover:bg-gray-100 dark:hover:bg-neutral-800 px-3 -mx-3 rounded-md'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-900 flex-shrink-0">
                          <Image
                            src={app.icon}
                            alt={`${app.name} icon`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h2 className={`text-[15px] font-medium transition-colors ${
                            isActive 
                              ? 'text-white dark:text-black' 
                              : 'group-hover:text-gray-900 dark:group-hover:text-white'
                          }`}>
                            {app.name}
                          </h2>
                          <div className={`text-[12px] ${
                            isActive ? 'text-gray-300 dark:text-gray-700' : 'text-gray-500'
                          }`}>
                            {app.category}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white dark:bg-black">
        <div className="py-8 px-16">
          {children}
        </div>
      </main>
    </div>
  );
} 