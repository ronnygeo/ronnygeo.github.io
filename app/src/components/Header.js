function Header() {
  React.useEffect(() => {
    if (typeof $ !== 'undefined') {
      const $offCanvasLeft = $('#offCanvasLeft');
      
      // The click handler for closing the off-canvas menu
      $offCanvasLeft.on('click.app', function(){ // Added .app namespace for easier removal
        // It's good practice to ensure these elements exist before manipulating
        const $offCanvasWrapper = $('#offCanvasWrapper'); // This ID should be on a main app wrapper

        if ($offCanvasLeft.length) {
          $offCanvasLeft.removeClass('is-open');
          $offCanvasLeft.attr('aria-hidden', true);
        }
        
        // This part depends on the offCanvasWrapper being present in the DOM,
        // likely rendered by App.js or a higher-order component.
        if ($offCanvasWrapper.length) {
          $offCanvasWrapper.removeClass('is-off-canvas-open').removeClass('is-open-left');
        }
      });

      // Return a cleanup function to remove the event listener
      return () => {
        $offCanvasLeft.off('click.app');
      };
    } else {
      console.error("jQuery is not loaded - Header.js");
    }
  }, []); // Empty dependency array to run once on mount

  // Note: Foundation specific attributes like data-responsive-toggle, data-hide-for, data-open, data-off-canvas, data-dropdown-menu, data-magellan-target, data-responsive-menu might require specific JavaScript to function.
  // For this conversion, they are kept as is, but full interactivity might need more work or React-specific libraries for Foundation.
  return (
    <React.Fragment>
      <div className="title-bar" data-responsive-toggle="widemenu" data-hide-for="medium">
        <div className="title-bar-left">
          <button id="closeOffCanvas" className="menu-icon" type="button" data-open="offCanvasLeft"></button>
          <span className="title-bar-title"></span>
        </div>
      </div>
      
      {/* off-canvas left menu - Foundation's off-canvas structure */}
      <div className="off-canvas sticky position-left" id="offCanvasLeft" data-off-canvas>
        <ul className="vertical dropdown menu" id="ocMenu" data-dropdown-menu>
          <li><a href="#intro">About</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Technology</a></li>
          <li><a href="#interests">Interests</a></li>
          <li><a href="#links">Links</a></li>
        </ul>
      </div>

      {/* Top Bar Navigation for wider screens */}
      <div id="widemenu" className="top-bar" data-magellan-target="intro">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Ronny Mathew</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu" data-responsive-menu="drilldown medium-dropdown">
            <li><a href="#intro">About</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#interests">Interests</a></li>
            <li><a href="#links">Links</a></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
