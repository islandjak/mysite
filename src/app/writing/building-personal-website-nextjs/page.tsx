export default function BlogPost() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Building a Personal Website with Next.js</h1>
      <p className="text-gray-500 dark:text-gray-400">March 8, 2024</p>

      <p>
        When I decided to rebuild my personal website, I wanted to create something that was both 
        minimal and functional. I was particularly inspired by <a href="https://brianlovin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400">Brian Lovin's website</a>, which 
        exemplifies a perfect balance of aesthetics and usability. His design approach influenced many aspects 
        of this site, and I'm grateful for the inspiration.
      </p>

      <h2>Tech Stack and Architecture</h2>
      <p>
        For this project, I chose a modern and robust tech stack:
      </p>
      <ul>
        <li><strong>Framework:</strong> Next.js 15 with App Router for server components and routing</li>
        <li><strong>Styling:</strong> Tailwind CSS for utility-first styling and dark mode support</li>
        <li><strong>Components:</strong> Mix of server and client components for optimal performance</li>
        <li><strong>Deployment:</strong> Vercel for seamless deployment and analytics</li>
      </ul>

      <h2>Key Features</h2>
      <p>
        The site includes several core features designed for a great user experience:
      </p>
      <ul>
        <li><strong>Responsive Design:</strong> Mobile-first approach with a slide-out navigation menu</li>
        <li><strong>Dark Mode:</strong> System preference detection with smooth transitions</li>
        <li><strong>Dynamic Routes:</strong> Optimized routing for project showcases and blog posts</li>
        <li><strong>Performance:</strong> Leveraging Next.js built-in optimizations for images and fonts</li>
      </ul>

      <h2>Mobile Experience</h2>
      <p>
        Creating an intuitive mobile experience was a key focus:
      </p>
      <ul>
        <li><strong>Navigation:</strong> Hamburger menu with full-screen navigation drawer</li>
        <li><strong>Content Layout:</strong> Adaptive sections that optimize for mobile viewing</li>
        <li><strong>Touch Interactions:</strong> Carefully designed touch targets and gestures</li>
        <li><strong>Performance:</strong> Optimized loading and transitions for mobile networks</li>
      </ul>

      <h2>Design System</h2>
      <p>
        The design system prioritizes consistency and readability through:
      </p>
      <ul>
        <li><strong>Typography:</strong> Inter font for optimal readability across devices</li>
        <li><strong>Color Palette:</strong> Carefully chosen colors that work seamlessly in both light and dark modes</li>
        <li><strong>Spacing:</strong> Consistent spacing and typography scales throughout</li>
        <li><strong>Animations:</strong> Subtle transitions for interactive elements</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>
        The site will continue to evolve with planned enhancements:
      </p>
      <ul>
        <li>Expanded writing section with more technical articles</li>
        <li>Detailed case studies for projects</li>
        <li>Enhanced code syntax highlighting</li>
        <li>Improved search functionality</li>
        <li>RSS feed for content updates</li>
      </ul>

      <p>
        This site will continue to evolve as I add more content and features. The source code is available on my GitHub, 
        and I welcome any feedback or suggestions for improvement. Building this site has been a great opportunity to 
        implement modern web development practices while creating a platform to share my work and thoughts.
      </p>
    </article>
  );
} 