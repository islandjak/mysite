
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add CSS variable for animation control
document.documentElement.style.setProperty('--animation-enabled', '1');

createRoot(document.getElementById("root")!).render(<App />);
