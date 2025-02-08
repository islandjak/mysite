export default function BlogPost() {
  return (
    <article className="max-w-2xl">
      <header className="mb-8">
        <h1 className="text-2xl font-normal mb-3">Building a Personal Website with Next.js</h1>
        <div className="flex items-center text-[13px] text-gray-500">
          <time>March 8, 2024</time>
        </div>
      </header>

      <div className="prose dark:prose-invert">
        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          When I decided to rebuild my personal website, I wanted to create something that was both 
          minimal and functional. After exploring various options, I was particularly inspired by 
          Brian Lovin's website design, which perfectly balances aesthetics with usability.
        </p>

        <h2 className="text-xl font-normal mt-12 mb-4">Why Next.js?</h2>
        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Next.js 14 was an obvious choice for this project. Its built-in support for React Server 
          Components, file-based routing, and excellent TypeScript integration made it perfect for 
          a modern personal website. The ability to mix static and dynamic content seamlessly was 
          particularly appealing.
        </p>

        <h2 className="text-xl font-normal mt-12 mb-4">The Design System</h2>
        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          For styling, I chose Tailwind CSS combined with some custom components. This approach 
          allowed me to maintain consistency while having the flexibility to create unique elements 
          when needed. The design system focuses on:
        </p>

        <ul className="list-disc pl-4 mb-6 space-y-2">
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Typography: Using Inter font for optimal readability
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Spacing: Consistent spacing scale throughout the site
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Colors: A carefully chosen palette that works in both light and dark modes
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Components: Reusable components for common UI patterns
          </li>
        </ul>

        <h2 className="text-xl font-normal mt-12 mb-4">Dark Mode Implementation</h2>
        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          One of the key features I wanted to implement was a seamless dark mode experience. 
          Using Tailwind's dark mode support and system preference detection, I was able to 
          create a solution that:
        </p>

        <ul className="list-disc pl-4 mb-6 space-y-2">
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Automatically matches system preferences
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Prevents flash of wrong theme on page load
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Maintains consistent contrast ratios for accessibility
          </li>
        </ul>

        <h2 className="text-xl font-normal mt-12 mb-4">Performance Considerations</h2>
        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Performance was a top priority. I implemented several optimizations:
        </p>

        <ul className="list-disc pl-4 mb-6 space-y-2">
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Static page generation for faster load times
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Image optimization using Next.js Image component
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Minimal JavaScript with selective hydration
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Efficient styling with Tailwind's JIT compiler
          </li>
        </ul>

        <h2 className="text-xl font-normal mt-12 mb-4">What's Next?</h2>
        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
          This is just the beginning. I plan to continue improving the site with:
        </p>

        <ul className="list-disc pl-4 mt-4 space-y-2">
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            More detailed project case studies
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Integration with various APIs for dynamic content
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Enhanced MDX support for richer blog posts
          </li>
        </ul>
      </div>
    </article>
  );
} 