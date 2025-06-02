function Portfolio() {
  React.useEffect(() => {
    if (window.sr) {
      // The component's main div has id="projects"
      window.sr.reveal('#projects', { duration: 500 });
    } else {
      console.error("ScrollReveal (sr) is not initialized - Portfolio.js");
    }
  }, []); // Empty dependency array to run once on mount

  // Note: Foundation specific attributes like data-magellan-target
  // will require JavaScript to function. They are preserved here.
  return (
    <div id="projects" className="page" data-magellan-target="projects">
      <div className="row">
        <div className="column small-12 large-6">
          <h1>Projects</h1>
          <h3>Northeastern University</h3>
          <h5>Boston, MA</h5>
          <h6>Nov 2015 to Dec 2015</h6>
          <ul>
            <li>
              Developed project to <a href="http://rohitbegani.github.io/FAIproject-CS5100/" target="_blank" rel="noopener noreferrer">Model User Preferences for Location Based Recommendations</a> using python and mongoDB.
            </li>
          </ul>

          <h6>Jan 2016 to April 2016</h6>
          <ul>
            <li>
              <a href="http://webdevelopment-mathewronny.rhcloud.com/assignment/client/#/" target="_blank" rel="noopener noreferrer">Form Maker Application</a> using Node.js, MongoDB and Angular.JS.
            </li>
            <li>
              <a href="http://prod-gluec.rhcloud.com/" target="_blank" rel="noopener noreferrer">GlueC</a>: A Web Application to manage all sorts of eCommerce Inventory Management using Node.js, MongoDB and Angular.JS (MEAN stack App).
            </li>
          </ul>

          <h3>Heriot-Watt University</h3>
          <h5>Dubai, UAE</h5>
          <h6>Jan 2012 to Nov 2013</h6>
          <ul className="text-justify">
            <li>
              Developed and Completed Masters’ Dissertation on <a href="http://webemotion.ronnygeo.com/" target="_blank" rel="noopener noreferrer">Real-time Data Analytics of the Sematic Web</a> using node.js, mongoDB, socket.io, Twitter API. Currently extending this project to include Advanced Analytics.
            </li>
            <li>
              Other Academic Projects: <a href="http://aws.ronnygeo.xyz/mybooks" target="_blank" rel="noopener noreferrer">PHP Bookstore</a>, PHP DealOn website, PHP Webmail client, Android Diary Application, Android Quiz Application, Shell programming, Web Browser with C# .NET, Java Applet for message signing.
            </li>
          </ul>
        </div>
        <div className="column small-12 large-6">
          <h3>Minor Projects</h3>
          <h4>University of Kerala</h4>
          <h5>India</h5>
          <h6>June 2008 to Aug 2010</h6>
          <ul className="text-justify">
            <li>Acted as Webmaster for IEEE MBCET (IEEE College Chapter) from 2008 to 2009 (Website powered by Joomla).</li>
            <li>Served as Graphic Designer for College Newsletter, ‘The Fourth Module’ and College Magazine ‘Route 66’.</li>
          </ul>

          <h3>Additional Projects</h3>
          <ul className="text-justify">
            <li>Worked on a Ruby on Rails <a href="http://aws.ronnygeo.xyz:3000/" target="_blank" rel="noopener noreferrer">eCommerce project</a> for a startup.</li>
            <li>Performed Map Reduce operations on a sample dataset of Twitter using python (Coursera.com).</li>
            <li>Completed projects of Interactive games using Python course, from Rice University, Texas (Coursera.com).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
