function Skills() {
  // Note: Foundation specific attributes like data-parallax, data-equalizer, etc.,
  // will require JavaScript to function. They are preserved here, but full interactivity
  // may need additional setup or React-specific libraries for Foundation.

  // Image paths are kept as is for now (e.g., "./images/tensorflow_new.svg")
  // These will need to be updated or handled when static assets are properly configured.

  return (
    <div 
      id="skills" 
      className="parallax-window page" 
      data-parallax="scroll" 
      data-ios-fix="true" 
      data-bleed="10" 
      data-image-src="images/tunnel.jpg" // This path will need to be correct relative to the final deployment
      data-magellan-target="skills"
    >
      <h1>Technology</h1>

      <div className="row align-spaced align-stretch" data-equalizer>
        <div className="column small-12 medium-3 skill-box align-middle" data-equalizer-watch>
          <img src="./images/tensorflow_new.svg" alt="TensorFlow" style={{ maxWidth: '40%' }} />
          <img src="./images/pytorch_new.svg" alt="PyTorch" style={{ maxWidth: '40%' }} />
        </div>
        <div className="column small-12 medium-3 skill-box align-middle" data-equalizer-watch>
          <img src="./images/huggingface_new.svg" alt="Hugging Face" style={{ maxWidth: '50%' }} />
        </div>
        <div className="column small-12 medium-3 skill-box align-middle" data-equalizer-watch>
          <img src="./images/langchain_new.png" alt="Langchain" style={{ maxWidth: '60%' }} />
        </div>
        <div className="column small-12 medium-3 skill-box align-middle" data-equalizer-watch>
          <img src="./images/apache_spark.png" alt="Apache Spark" style={{ maxWidth: '60%' }} />
        </div>
        <div className="column small-12 medium-3 skill-box align-middle" data-equalizer-watch>
          <img src="./images/opencv.png" alt="OpenCV" style={{ maxWidth: '50%' }} />
        </div>
        <div className="column small-12 medium-3 skill-box skill-text-box align-middle" data-equalizer-watch>
          <span>AI Agents</span>
        </div>
        <div className="column small-12 medium-3 skill-box align-middle" data-equalizer-watch>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-sass-original"></i>
        </div>
        <div className="column small-12 medium-3 skill-box" data-equalizer-watch>
          {/* Original HTML comment was: &lt;!--<div class="skill-box">--&gt; */}
          <i className="devicon-python-plain"></i>
          <i className="devicon-django-plain"></i>
          <i className="devicon-fastapi-plain"></i>
          {/* Original HTML comment was: &lt;!--</div>--&gt; */}
        </div>
        <div className="column  small-12 medium-3 skill-box skill-box-bigger-font" data-equalizer-watch>
          <i className="devicon-nodejs-plain-wordmark"></i>
        </div>
        <div className="column small-12 medium-3 skill-box" data-equalizer-watch>
          <i className="devicon-angularjs-plain"></i>
          <i className="devicon-react-original"></i>
        </div>
        <div className="column small-12 medium-3 skill-box" data-equalizer-watch>
          <i className="devicon-html5-plain-wordmark"></i>&nbsp;<i className="devicon-css3-plain-wordmark"></i>
        </div>
        <div className="column small-12 medium-3 skill-box align-stretch" data-equalizer-watch>
          <i className="devicon-mongodb-plain-wordmark"></i>
          <i className="devicon-redis-plain-wordmark"></i>
        </div>
        <div className="column small-12 medium-3 skill-box" data-equalizer-watch>
          <i className="devicon-mysql-plain-wordmark"></i>&nbsp;<i className="devicon-postgresql-plain-wordmark"></i>
        </div>
        <div className="column skill-box small-12 medium-3" data-equalizer-watch>
          <i className="devicon-java-plain-wordmark"></i>
          <i className="devicon-cplusplus-plain"></i>
        </div>
      </div>
    </div>
  );
}
