import React from 'react';

function Contact() {
  return (
    <div id="links" className="my-links" /* data-magellan-target="links" */>
      <div className="row">
        <h1>Connect with me</h1>
      </div>
      <div className="row align-center">
        <ul className="no-decoration-links">
          <li><a href="https://www.linkedin.com/in/ronnygeo" target="_blank" rel="noopener noreferrer"><span className="fa-stack fa-lg">
            <i className="fa fa-linkedin fa-stack-1x"></i>
          </span>LinkedIn</a></li>
          <li><a href="https://ronnygeo.medium.com" target="_blank" rel="noopener noreferrer"><span className="fa-stack fa-lg">
            <i className="fa fa-brands fa-medium fa-stack-1x"></i>
          </span>Medium</a></li>
          <li><a href="https://www.github.com/ronnygeo" target="_blank" rel="noopener noreferrer">
            <span className="fa-stack fa-lg">
              <i className="fa fa-github fa-stack-1x"></i>
            </span>
            Github<br /></a></li>
          <li><a href="https://500px.com/ronnygeo" target="_blank" rel="noopener noreferrer"><span className="fa-stack fa-lg">
            <i className="fa fa-500px fa-stack-1x"></i>
          </span>500px</a></li>
          <li><a href="https://behance.net/ronnygeo" target="_blank" rel="noopener noreferrer"><span className="fa-stack fa-lg">
            <i className="fa fa-behance-square fa-stack-1x"></i>
          </span>Behance</a></li>
          <li><a href="https://soundcloud.com/ronnie-matt" target="_blank" rel="noopener noreferrer"><span className="fa-stack fa-lg">
            <i className="fa fa-soundcloud fa-stack-1x"></i>
          </span>Soundcloud</a></li>
          <li><a href="https://pinterest.com/ronniematt/" target="_blank" rel="noopener noreferrer"><span className="fa-stack fa-lg">
            <i className="fa fa-pinterest fa-stack-1x"></i>
          </span>Pinterest</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
