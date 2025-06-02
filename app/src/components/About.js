function About() {
  const aboutMeStyle = {
    width: '100vw'
  };

  // The span for role will be dynamic later, for now, it's empty.
  // Image src "images/me.jpg" is kept as is for now.
  // The surrounding <div id="intro" class="row column"> from the original structure
  // and <div class="parallax-window" ...> are not included here; this component
  // focuses on the "intro-text" and "about-me" content itself.
  // These could be wrapped by a layout component later.
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
