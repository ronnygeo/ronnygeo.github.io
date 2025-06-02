function About() {
  const aboutMeStyle = {
    width: '100vw'
  };

  React.useEffect(() => {
    // Initialize TheaterJS
    if (typeof theaterJS === 'function') {
      const theater = theaterJS();
      theater
        .addActor('role', { speed: 0.6, accuracy: 0.8 })
        .addScene('role:AI', 600)
        .addScene('role:VISION', 500)
        .addScene('role:NLP', 500)
        .addScene('role:DATA', 700)
        .addScene('role:ANALYTICS')
        .addScene('role: WEB', 400)
        .addScene('role: SOFTWARE', 400)
        .addScene(theater.replay.bind(theater));
    } else {
      console.error("theaterJS is not loaded - About.js");
    }

    // Initialize ScrollReveal for #intro (which is the main div of this component)
    if (window.sr) {
      // The component's main div has id="intro"
      window.sr.reveal('#intro', { duration: 500 }); 
    } else {
      console.error("ScrollReveal (sr) is not initialized - About.js");
    }
    
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div id="intro" className="row column">
      <div id="intro-text">
        <img src="images/me.jpg" id="intro-img" width="150px" alt="Ronny Mathew" />
        <h1>RONNY MATHEW</h1>
        <h2>I WORK ON <span id="role"></span></h2>
      </div>

      <div className="align-bottom" id="about-me" style={aboutMeStyle}>
        <h1>About Me</h1>
        <p className="text-justify">
          As a results-oriented Applied AI/ML Leader at Rue Gilt Groupe, I drive the development and implementation of cutting-edge AI solutions that deliver significant business value. My expertise spans Generative AI, Machine Learning, Data Science & Analytics (SQL & NoSQL), Full-Stack Web Development, and Software Engineering (Python, Scala, Java, C++), enabling me to lead diverse teams and architect innovative products.
        </p>
      </div>
    </div>
  );
}
