import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set app element for react-modal

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </StrictMode>
);
