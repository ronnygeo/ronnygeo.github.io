import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modals from './components/Modals';
import { ParallaxBanner } from 'react-scroll-parallax';
import './css/foundation-overrides.css';
import './css/style.css';

function App() {
  const [isChicagoModalOpen, setChicagoModalOpen] = useState(false);
  const [isSunsetModalOpen, setSunsetModalOpen] = useState(false);
  const [isHarborModalOpen, setHarborModalOpen] = useState(false);
  const [isBridgeModalOpen, setBridgeModalOpen] = useState(false);

  return (
    <div className="off-canvas-wrapper"> {/* From original index.html */}
      <div className="off-canvas-wrapper-inner" id="offCanvasWrapper" /* data-off-canvas-wrapper */>
        <Navigation />
        {/* <div data-off-canvas-content> From original index.html, functionality to be added */}
        <div id="main-content-area"> {/* Replaces data-off-canvas-content for now */}
          <div id="main-container"> {/* From original index.html */}
            <Hero />
            <About /> {/* This was part of Hero's parallax in original, now separate */}

            {/* Section for History (Experience & Education) */}
            <div id="history" className="page" /* data-magellan-target="history" */>
              <div className="row">
                <Experience />
                <Education />
              </div>
            </div>

            {/* Placeholder for the parallax window after history. */}
            <ParallaxBanner
              layers={[{ image: '/images/northeastern.jpg', speed: -15 }]}
              style={{ height: '400px' }} // Or original height
              className="parallax-window"
            />

            <Projects />
            <Skills /> {/* Skills itself is a parallax window, its own background is handled within the component */}
            <Interests
              openChicagoModal={() => setChicagoModalOpen(true)}
              openSunsetModal={() => setSunsetModalOpen(true)}
              openHarborModal={() => setHarborModalOpen(true)}
              openBridgeModal={() => setBridgeModalOpen(true)}
            />

            {/* Placeholder for the parallax window after interests. */}
            <ParallaxBanner
              layers={[{ image: '/images/sunsetbeach.jpg', speed: -15 }]}
              style={{ height: '400px' }}
              className="parallax-window"
            />
          </div> {/* end #main-container */}
          <Contact />
          <Footer />
            <Modals
              chicagoOpen={isChicagoModalOpen} closeChicagoModal={() => setChicagoModalOpen(false)}
              sunsetOpen={isSunsetModalOpen} closeSunsetModal={() => setSunsetModalOpen(false)}
              harborOpen={isHarborModalOpen} closeHarborModal={() => setHarborModalOpen(false)}
              bridgeOpen={isBridgeModalOpen} closeBridgeModal={() => setBridgeModalOpen(false)}
            />
        </div> {/* end #main-content-area (replacement for data-off-canvas-content) */}
      </div> {/* end .off-canvas-wrapper-inner */}
      </div>
  );
}

export default App;
