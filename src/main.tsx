import './global.css';
import './lib/i18n.ts';
import './lib/gsap.ts';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />,
  </StrictMode>,
);
