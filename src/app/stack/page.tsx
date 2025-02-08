import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const apps = [
  {
    name: 'VS Code',
    description: 'My primary code editor, customized with vim bindings',
    icon: '/icons/vscode.png',
    url: 'https://code.visualstudio.com',
    category: 'DEVELOPMENT'
  },
  {
    name: 'iTerm2',
    description: 'Customized terminal with Oh My Zsh and Starship prompt',
    icon: '/icons/iterm2.png',
    url: 'https://iterm2.com',
    category: 'DEVELOPMENT'
  },
  {
    name: 'Arc',
    description: 'A beautiful and fast browser with great tab management',
    icon: '/icons/arc.png',
    url: 'https://arc.net',
    category: 'PRODUCTIVITY'
  },
  {
    name: 'Figma',
    description: 'Design tool for all my UI/UX work',
    icon: '/icons/figma.png',
    url: 'https://figma.com',
    category: 'DESIGN'
  },
  {
    name: 'Raycast',
    description: 'Spotlight replacement with powerful extensions',
    icon: '/icons/raycast.png',
    url: 'https://raycast.com',
    category: 'PRODUCTIVITY'
  },
  {
    name: '1Password',
    description: 'Password manager for all my accounts',
    icon: '/icons/1password.png',
    url: 'https://1password.com',
    category: 'SECURITY'
  }
];

export default function Stack() {
  return (
    <div>
      <h1 className="text-xl font-normal mb-2">Stack</h1>
      <p className="text-[15px] text-gray-600 dark:text-gray-400">
        A collection of software and tools I use daily for development, design, and productivity.
      </p>
    </div>
  );
} 