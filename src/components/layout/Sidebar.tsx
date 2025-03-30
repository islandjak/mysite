import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderKanban, PenSquare, UserCircle2, Mail, PanelLeft, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const isMobile = useIsMobile();
  
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: FolderKanban, label: 'Projects', path: '/projects' },
    { icon: PenSquare, label: 'Blog', path: '/blog' },
    { icon: UserCircle2, label: 'About', path: '/about' },
    { icon: Mail, label: 'Contact', path: '/contact' },
  ];

  // Handle menu item click on mobile to close sidebar
  const handleMenuItemClick = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* The sidebar itself */}
      <aside className={`w-60 h-screen fixed top-0 left-0 flex flex-col bg-sidebar transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-40`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <h1 className="text-lg font-semibold">Portfolio</h1>
            </div>
            {/* Toggle button inside sidebar */}
            <button 
              className="p-2 bg-background/80 backdrop-blur-sm border border-border rounded-md text-foreground hover:bg-accent transition-all duration-200"
              onClick={toggleSidebar}
              aria-label="Close Sidebar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `sidebar-item ${isActive ? 'active' : ''} animate-fade-in`
                }
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={handleMenuItemClick}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent overflow-hidden">
              <img 
                src="/pic.png" 
                alt="Jack H. Landis" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Jack+H+Landis&background=random';
                }}
              />
            </div>
            <div>
              <h3 className="font-medium text-sm">Jack H. Landis</h3>
              <p className="text-xs text-muted-foreground">AI & Data Analyst</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Toggle button - only visible when sidebar is closed */}
      {!isOpen && (
        <button 
          className="fixed left-4 top-4 z-50 p-2 bg-background/80 backdrop-blur-sm border border-border rounded-md text-foreground hover:bg-accent transition-all duration-300"
          onClick={toggleSidebar}
          aria-label="Open Sidebar"
        >
          <PanelLeft className="w-4 h-4" />
        </button>
      )}
    </>
  );
};

export default Sidebar;
