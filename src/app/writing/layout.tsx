'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const posts = [
  {
    title: 'Building a Personal Website with Next.js',
    date: 'March 8, 2024',
    slug: 'building-personal-website-nextjs',
  },
  {
    title: 'Building Just My Beer: A Journey of Data, Design, and User Experience',
    date: 'March 1, 2024',
    slug: 'building-just-my-beer',
  },
  {
    title: 'Modern Web Development Best Practices',
    date: 'February 25, 2024',
    slug: 'modern-web-development-practices',
  },
];

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRootPath = pathname === '/writing';

  return (
    <div className="flex flex-col md:flex-row">
      {/* Secondary Sidebar - full width on mobile when on root path */}
      <aside className={`${
        isRootPath ? 'block' : 'hidden md:block'
      } md:w-[300px] border-r border-gray-100 dark:border-neutral-800 bg-gray-50/90 dark:bg-neutral-900/90`}>
        <div className="sticky top-0 overflow-y-auto h-screen">
          <div className="py-8">
            <div className="px-6">
              <header className="mb-8">
                <div className="flex items-center justify-between">
                  <h1 className="text-[18px] font-medium">Writing</h1>
                  <Link
                    href="/rss.xml"
                    className="inline-flex items-center px-3 py-1.5 text-[13px] text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Subscribe
                  </Link>
                </div>
              </header>

              <div className="space-y-6">
                {posts.map((post) => {
                  const isActive = pathname === `/writing/${post.slug}`;
                  return (
                    <Link 
                      key={post.slug}
                      href={`/writing/${post.slug}`}
                      className={`block group ${
                        isActive 
                          ? 'bg-black dark:bg-white px-6 py-3 -mx-6 rounded-md' 
                          : 'py-1 hover:bg-gray-100 dark:hover:bg-neutral-800 px-3 -mx-3 rounded-md'
                      }`}
                    >
                      <article>
                        <h2 className={`text-[15px] font-medium transition-colors mb-1 ${
                          isActive 
                            ? 'text-white dark:text-black' 
                            : 'group-hover:text-blue-600 dark:group-hover:text-blue-500'
                        }`}>
                          {post.title}
                        </h2>
                        <time className={`block text-[12px] ${
                          isActive ? 'text-gray-300 dark:text-gray-700' : 'text-gray-500'
                        }`}>
                          {post.date}
                        </time>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - hidden on mobile when on root path */}
      <main className={`${
        isRootPath ? 'hidden md:block' : 'block'
      } flex-1 bg-white dark:bg-black`}>
        <div className="py-8 px-16">
          {children}
        </div>
      </main>
    </div>
  );
} 