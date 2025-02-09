import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Article() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Building Just My Beer: A Journey of Data, Design, and User Experience</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">March 1, 2024</p>

      <div className="flex items-center space-x-2 mb-4">
        <Link
          href="https://justmybeer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
        >
          Visit Just My Beer
          <ExternalLink className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="relative w-full h-[400px] mb-12">
        <Image
          src="/images/justmybeer.png"
          alt="Just My Beer application screenshot showing the interactive map and beer list interface"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <p>
        Just My Beer started as a personal project inspired by my uncle&apos;s impressive craft beer collection. As a software engineer and admirer of his extensive beer knowledge, I wanted to create a platform that would help catalog and showcase his vast collection of unique brews. What began as a way to digitize his beer journey has evolved into a platform where enthusiasts can discover, track, and share their beer experiences.
      </p>

      <h2>Tech Stack and Architecture</h2>
      <p>
        To handle my uncle&apos;s growing collection and ensure scalability for other enthusiasts, I built the application with a modern and robust tech stack:
      </p>
      <ul>
        <li><strong>Backend:</strong> Flask provides a lightweight yet powerful Python framework for our API endpoints and data processing</li>
        <li><strong>Frontend:</strong> React delivers a responsive and interactive user interface with smooth transitions and state management</li>
        <li><strong>Database:</strong> PostgreSQL stores our beer data, user information, and location details with PostGIS extension for geospatial queries</li>
        <li><strong>Authentication:</strong> JWT-based authentication system ensures secure user sessions and data privacy</li>
      </ul>

      <h2>Key Features</h2>
      <p>
        The core functionality of Just My Beer was designed with my uncle&apos;s needs in mind, but has grown to include features for all beer enthusiasts:
      </p>
      <ul>
        <li><strong>Interactive Map:</strong> A dynamic map interface showing brewery locations and tracking where each beer in the collection originated</li>
        <li><strong>Leaderboard System:</strong> Gamification elements that track and display achievements, inspired by my uncle&apos;s quest to try new and unique beers</li>
        <li><strong>Advanced Search:</strong> Powerful search functionality with filters for beer style, brewery, and location, making it easy to find specific beers in large collections</li>
        <li><strong>User Profiles:</strong> Personalized profiles where users can track their beer history and share recommendations</li>
      </ul>

      <h2>Advanced Search Features</h2>
      <p>
        One of the most significant improvements was enhancing the search experience:
      </p>
      <ul>
        <li><strong>Smart Autocomplete:</strong> Implemented type-ahead suggestions with preview cards for beers, breweries, and classes, using debounced input for optimal performance</li>
        <li><strong>Enhanced Filtering:</strong> Added comprehensive filters including ABV range, date reviewed, and multi-select options for beer classes, all with collapsible/expandable UI</li>
        <li><strong>Search History:</strong> Integrated localStorage for recent searches with quick re-run options and history management</li>
        <li><strong>Results Organization:</strong> Added flexible sorting (by score, date, name), grouping options, and a grid/list view toggle</li>
        <li><strong>Mobile Optimization:</strong> Enhanced the mobile experience with bottom sheet filters, larger tap targets, and swipe gestures</li>
      </ul>

      <h2>User Experience Improvements</h2>
      <p>
        We focused heavily on enhancing the overall user experience:
      </p>
      <ul>
        <li><strong>Visual Feedback:</strong> Added loading skeletons, smooth transitions, and improved &quot;no results&quot; states with helpful suggestions</li>
        <li><strong>Performance:</strong> Implemented debouncing, infinite scroll, and strategic caching for faster response times</li>
        <li><strong>Personalization:</strong> Enabled users to save favorite searches and discover related beers</li>
        <li><strong>Smart Suggestions:</strong> Added &quot;Did you mean?&quot; corrections and related search suggestions</li>
      </ul>

      <h2>Technical Challenges</h2>
      <p>
        Building Just My Beer came with its share of interesting technical challenges:
      </p>
      <ul>
        <li><strong>Data Management:</strong> Implementing efficient data structures and caching strategies to handle my uncle&apos;s extensive collection and growing user contributions</li>
        <li><strong>Geospatial Queries:</strong> Optimizing location-based searches and map rendering to visualize the geographic diversity of the collection</li>
        <li><strong>Real-time Updates:</strong> Implementing WebSocket connections for live updates to the leaderboard and user achievements</li>
        <li><strong>Mobile Responsiveness:</strong> Ensuring a consistent and intuitive experience for cataloging beers on the go</li>
      </ul>

      <h2>Future Enhancements</h2>
      <p>
        Inspired by my uncle&apos;s continued exploration of craft beers, the roadmap for Just My Beer includes several exciting features:
      </p>
      <ul>
        <li>Integration with popular beer rating platforms for expanded data coverage</li>
        <li>Implementation of a recommendation engine using machine learning to suggest similar beers</li>
        <li>Addition of social features for sharing and discussing beer experiences with fellow enthusiasts</li>
        <li>Development of a mobile app for easier on-the-go beer logging</li>
        <li>Enhanced analytics dashboard to visualize drinking patterns and preferences</li>
      </ul>

      <p>
        Building Just My Beer has been an exciting journey that combines technical challenges with my uncle&apos;s passion for craft beer. What started as a simple way to catalog his collection has grown into a platform that helps beer enthusiasts discover and share their experiences. I look forward to continuing its development and adding new features that enhance the craft beer discovery experience for everyone.
      </p>
    </article>
  );
} 