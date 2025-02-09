import Image from 'next/image';

export default function BlogPost() {
  return (
    <article className="max-w-2xl">
      <header className="mb-8">
        <h1 className="text-2xl font-normal mb-3">Building Just My Beer: A Journey of Data, Design, and User Experience</h1>
        <div className="flex items-center text-[13px] text-gray-500">
          <time>March 1, 2024</time>
        </div>
      </header>

      <div className="prose dark:prose-invert">
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src="/justmybeer.png"
            alt="Just My Beer screenshot"
            width={800}
            height={400}
            className="w-full"
          />
        </div>

        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Just My Beer is a platform I built to help beer enthusiasts track, rate, and explore beers from around 
          the world. The project combines modern web technologies with an intuitive user interface to create 
          a seamless experience for discovering and rating beers.
        </p>

        <h2 className="text-xl font-normal mt-12 mb-4">Tech Stack and Architecture</h2>
        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The application is built with a Flask backend and React frontend, leveraging PostgreSQL for data storage. 
          This combination allows for efficient handling of beer data while maintaining a responsive user interface.
        </p>

        <ul className="list-disc pl-4 mb-6 space-y-2">
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Backend: Flask with PostgreSQL database using psycopg2 for database connections
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Frontend: React with Bootstrap and custom CSS for styling
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Mapping: Leaflet.js with React-Leaflet integration
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Deployment: Backend on Render, Frontend on Vercel
          </li>
        </ul>

        <h2 className="text-xl font-normal mt-12 mb-4">Key Features</h2>
        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The application includes several core features designed to enhance the beer discovery experience:
        </p>

        <ul className="list-disc pl-4 mb-6 space-y-2">
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Interactive map showing beer locations with clickable markers
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Dynamic leaderboard displaying top-rated beers
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Search functionality for finding beers by name, brewery, or class
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Admin panel for managing beer entries with authentication
          </li>
        </ul>

        <h2 className="text-xl font-normal mt-12 mb-4">Technical Challenges</h2>
        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Building Just My Beer presented several interesting challenges:
        </p>

        <ul className="list-disc pl-4 mb-6 space-y-2">
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Implementing efficient database connection pooling for scalability
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Managing API rate limits and data scraping from external sources
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Ensuring smooth frontend-backend communication with proper CORS setup
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Creating a responsive design that works across all devices
          </li>
        </ul>

        <h2 className="text-xl font-normal mt-12 mb-4">Future Enhancements</h2>
        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
          The project continues to evolve, with several exciting features planned:
        </p>

        <ul className="list-disc pl-4 mt-4 space-y-2">
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            User accounts with personalized beer ratings and reviews
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Advanced data visualizations for beer trends and statistics
          </li>
          <li className="text-[15px] text-gray-700 dark:text-gray-300">
            Enhanced social features with real-time Instagram integration
          </li>
        </ul>
      </div>
    </article>
  );
} 