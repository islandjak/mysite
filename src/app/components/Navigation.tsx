'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, BookOpenIcon, UserIcon, DocumentTextIcon, BeakerIcon, CommandLineIcon, ShieldCheckIcon, CubeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { ExternalLink, Twitter, Linkedin, Github } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Writing', path: '/writing', icon: BookOpenIcon },
];

const meSection = [
  { name: 'About', path: '/about', icon: UserIcon },
  { name: 'Resume', path: '/resume', icon: DocumentTextIcon },
  { name: 'Stack', path: '/stack', icon: BeakerIcon },
];

const projectsSection = [
  { name: 'Just My Beer', path: '/projects/just-my-beer', icon: BeakerIcon },
  { name: 'Figma Plugins', path: '/figma-plugins', icon: CubeIcon },
  { name: 'Security Checklist', path: '/security-checklist', icon: ShieldCheckIcon },
  { name: 'Personal Site', path: '/projects/personal-site', icon: CodeBracketIcon },
];

const onlineSection = [
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/yourusername',
    icon: Twitter
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/in/yourusername',
    icon: Linkedin
  },
  { 
    name: 'GitHub', 
    href: 'https://github.com/yourusername',
    icon: Github
  },
];

interface NavLinkProps {
  item: {
    name: string;
    path?: string;
    href?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
  isExternal?: boolean;
}

interface NavSectionProps {
  title: string;
  items: Array<{
    name: string;
    path?: string;
    href?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }>;
  isExternal?: boolean;
}

export default function Navigation() {
  const pathname = usePathname();

  const NavLink = ({ item, isExternal = false }: NavLinkProps) => {
    const isActive = item.path === '/writing' 
      ? pathname.startsWith('/writing')
      : pathname === item.path;
    
    const linkProps = isExternal ? {
      href: item.href || '#',
      target: "_blank",
      rel: "noopener noreferrer"
    } : {
      href: item.path || '#'
    };

    const Component = isExternal ? 'a' : Link;
    const Icon = item.icon;
    
    return (
      <Component
        {...linkProps}
        className={`group flex items-center py-1 transition-colors ${
          isActive
            ? 'text-white dark:text-black'
            : 'text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        <div className={`flex items-center justify-between px-3 py-1.5 rounded-md w-full ${
          isActive 
            ? 'bg-black dark:bg-white' 
            : 'hover:bg-gray-100 dark:hover:bg-neutral-800'
        }`}>
          <div className="flex items-center">
            {Icon && <Icon className={`w-4 h-4 mr-3 ${isActive ? 'opacity-100' : 'opacity-70'}`} />}
            <span className="text-[14px] font-medium">{item.name}</span>
          </div>
          {isExternal && (
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40 transition-opacity" />
          )}
        </div>
      </Component>
    );
  };

  const NavSection = ({ title, items, isExternal = false }: NavSectionProps) => (
    <div>
      <h3 className="mb-2 text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
        {title}
      </h3>
      <div className="space-y-1">
        {items.map((item) => (
          <NavLink key={item.name} item={item} isExternal={isExternal} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-full py-6">
      <div className="px-6">
        <div className="mb-6">
          <h1 className="text-[15px] font-medium">Jack Landis</h1>
        </div>

        <div className="space-y-1 mb-8">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </div>

        <div className="space-y-8">
          <NavSection title="Me" items={meSection} />
          <NavSection title="Projects" items={projectsSection} />
          <NavSection title="Online" items={onlineSection} isExternal />
        </div>
      </div>
    </div>
  );
} 