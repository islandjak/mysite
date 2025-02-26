# Personal Website with Desktop Interface

A beautiful, minimalist personal website with a desktop-like interface inspired by macOS. This project creates a unique browsing experience where content sections open like windows on a desktop.

## Features

- **Desktop-like Interface**: Navigation elements appear as draggable windows
- **Beautiful Gradient Background**: Inspired by sunset/sunrise colors
- **Minimalist Design**: Clean, simple, and elegant
- **Responsive**: Works on all device sizes
- **Interactive Elements**: Windows can be dragged, closed, and resized
- **Modern Stack**: Built with Next.js, React, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Content

Edit the content in the `src/components/Desktop.tsx` file to customize:
- About section
- Projects section
- Contact information

### Styling

- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes

### Adding New Windows/Sections

To add a new window/section:
1. Create a new content component in `Desktop.tsx`
2. Add a new state in the `openWindows` state object
3. Add a new desktop icon
4. Add a new window component with the content

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by macOS desktop interface
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
