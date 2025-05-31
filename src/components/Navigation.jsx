import React, { useState, useEffect } from 'react';

function Navigation() {
  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768); // Example breakpoint for medium

  const toggleOffCanvas = () => setOffCanvasOpen(!isOffCanvasOpen);
  const closeOffCanvas = () => setOffCanvasOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust breakpoint as per Foundation's medium
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Basic styles for off-canvas visibility, can be enhanced with CSS transitions
  const offCanvasStyle = {
    transform: isOffCanvasOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out',
    // Ensure it's hidden by default if not using transform, e.g., display: isOffCanvasOpen ? 'block' : 'none'
  };

  // Style for the title bar, hide if not mobile view based on original data-hide-for="medium"
   const titleBarStyle = {
    display: isMobileView ? 'flex' : 'none', // 'flex' or 'block' depending on original styling
  };


  return (
    <>
      {/* Title bar for mobile */}
      <div className="title-bar" style={titleBarStyle} /* data-responsive-toggle="widemenu" data-hide-for="medium" */>
        <div className="title-bar-left">
          <button onClick={toggleOffCanvas} id="openOffCanvasButton" className="menu-icon" type="button"></button>
          <span className="title-bar-title">Ronny Mathew</span> {/* Added name here as in widemenu */}
        </div>
      </div>

      {/* Off-canvas menu */}
      <div
        className={`off-canvas sticky position-left ${isOffCanvasOpen ? 'is-open' : ''}`}
        id="offCanvasLeft"
        style={offCanvasStyle}
        /* data-off-canvas */
      >
        <ul className="vertical dropdown menu" id="ocMenu" /* data-dropdown-menu */>
          <li><a href="#intro" onClick={closeOffCanvas}>About</a></li>
          <li><a href="#history" onClick={closeOffCanvas}>History</a></li>
          <li><a href="#projects" onClick={closeOffCanvas}>Projects</a></li>
          <li><a href="#skills" onClick={closeOffCanvas}>Technology</a></li>
          <li><a href="#interests" onClick={closeOffCanvas}>Interests</a></li>
          <li><a href="#links" onClick={closeOffCanvas}>Links</a></li>
        </ul>
      </div>

      {/* Top bar for desktop (widemenu) */}
      {/* Show only if not mobile view */}
      {!isMobileView && (
        <div id="widemenu" className="top-bar" /* data-magellan-target="intro" */>
          <div className="top-bar-left">
            <ul className="dropdown menu" /* data-dropdown-menu */>
              <li className="menu-text">Ronny Mathew</li>
            </ul>
          </div>
          <div className="top-bar-right">
            {/* For simplicity, direct links. Dropdown logic can be added if needed. */}
            <ul className="menu" /* data-responsive-menu="drilldown medium-dropdown" */>
              <li><a href="#intro">About</a></li>
              <li><a href="#history">History</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#interests">Interests</a></li>
              <li><a href="#links">Links</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
