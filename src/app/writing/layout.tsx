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
    title: 'The Power of Consistent Design Systems',
    date: 'March 1, 2024',
    slug: 'power-of-consistent-design-systems',
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

  return (
    <div className="flex">
      {/* Secondary Sidebar */}
      <aside className="w-[300px] min-h-screen border-r border-gray-100 dark:border-neutral-800 bg-gray-50/90 dark:bg-neutral-900/90">
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
                          ? 'bg-black px-6 py-3 -mx-6 rounded-md' 
                          : 'py-1 hover:bg-gray-100 dark:hover:bg-neutral-800 px-3 -mx-3 rounded-md'
                      }`}
                    >
                      <article>
                        <h2 className={`text-[15px] font-medium transition-colors mb-1 ${
                          isActive 
                            ? 'text-white' 
                            : 'group-hover:text-blue-600 dark:group-hover:text-blue-500'
                        }`}>
                          {post.title}
                        </h2>
                        <time className={`block text-[12px] ${
                          isActive ? 'text-gray-300' : 'text-gray-500'
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

      {/* Main Content */}
      <main className="flex-1 bg-white dark:bg-black">
        <div className="py-8 px-16">
          {children}
        </div>
      </main>
    </div>
  );
} 