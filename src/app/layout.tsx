import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './providers/theme-provider';
import StyledComponentsRegistry from './lib/registry';
import Navigation from './components/Navigation';
import MobileNav from './components/MobileNav';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Jack Landis',
  description: 'Software engineer, writer, and creator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white antialiased`}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <div className="flex">
              {/* Desktop Sidebar - hidden on mobile */}
              <nav className="hidden md:fixed md:inset-y-0 md:w-[220px] md:block border-r border-gray-100 dark:border-neutral-800 bg-gray-50/90 dark:bg-neutral-900/90">
                <Navigation />
              </nav>
              
              {/* Mobile Navigation */}
              <div className="md:hidden">
                <MobileNav />
              </div>

              {/* Main content - adjusted padding for mobile */}
              <main className="flex-1 md:pl-[220px]">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
