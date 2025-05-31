import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import { ParallaxBanner } from 'react-scroll-parallax';

function Hero() {
  return (
    <ParallaxBanner
      layers={[{ image: '/images/boston.jpg', speed: -20 }]}
      className="parallax-window" // Keep original class for styling if needed
      style={{ height: 'auto' }} // Adjust height as needed, or let content define it
    >
      <Fade triggerOnce duration={500}>
        <div id="intro" className="row column"> {/* Original content here */}
          <div id="intro-text">
            <img src="/images/me.jpg" id="intro-img" width="150px" alt="Ronny Mathew" />
          <h1>RONNY MATHEW</h1>
          <h2>I WORK ON <TypeAnimation
              sequence={[
                'AI', 1000,
                'VISION', 1000,
                'NLP', 1000,
                'DATA', 1000,
                'ANALYTICS', 1000,
                'WEB', 1000,
                'SOFTWARE', 1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
              id="role"
            /></h2>
          </div>
          {/* The About Me section will be in About.jsx */}
        </div>
      </Fade>
    </ParallaxBanner>
  );
}

export default Hero;
