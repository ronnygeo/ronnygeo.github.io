function Header() {
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
