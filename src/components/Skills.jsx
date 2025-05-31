import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

function Skills() {
  return (
    <ParallaxBanner
      layers={[{ image: '/images/tunnel.jpg', speed: -15 }]}
      className="parallax-window page" // Keep original classes
      id="skills" // Keep original id
      style={{ height: 'auto' }}
    >
      <h1>Technology</h1>

      <div className="row align-spaced align-stretch" /* data-equalizer */>
        <div className="column small-12 medium-3 skill-box align-middle" /* data-equalizer-watch */>
          <img src="/images/tensorflow_new.svg" alt="TensorFlow" style={{maxWidth: '40%'}} />
          <img src="/images/pytorch_new.svg" alt="PyTorch" style={{maxWidth: '40%'}} />
        </div>
        <div className="column small-12 medium-3 skill-box align-middle" /* data-equalizer-watch */>
          <img src="/images/huggingface_new.svg" alt="Hugging Face" style={{maxWidth: '50%'}} />
        </div>
        <div className="column small-12 medium-3 skill-box align-middle" /* data-equalizer-watch */>
          <img src="/images/langchain_new.png" alt="Langchain" style={{maxWidth: '60%'}} />
        </div>
        <div className="column small-12 medium-3 skill-box align-middle" /* data-equalizer-watch */>
          <img src="/images/apache_spark.png" alt="Apache Spark" style={{maxWidth: '60%'}} />
        </div>
        <div className="column small-12 medium-3 skill-box align-middle" /* data-equalizer-watch */>
          <img src="/images/opencv.png" alt="OpenCV" style={{maxWidth: '50%'}} />
        </div>
        <div className="column small-12 medium-3 skill-box skill-text-box align-middle" /* data-equalizer-watch */>
          <span>AI Agents</span>
        </div>
        <div className="column small-12 medium-3 skill-box align-middle" /* data-equalizer-watch */>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-sass-original"></i>
        </div>
        <div className="column small-12 medium-3 skill-box" /* data-equalizer-watch */>
          <i className="devicon-python-plain"></i>
          <i className="devicon-django-plain"></i>
          <i className="devicon-fastapi-plain"></i>
        </div>
        <div className="column  small-12 medium-3 skill-box skill-box-bigger-font" /* data-equalizer-watch */>
          <i className="devicon-nodejs-plain-wordmark"></i>
        </div>
        <div className="column small-12 medium-3 skill-box" /* data-equalizer-watch */>
          <i className="devicon-angularjs-plain"></i>
          <i className="devicon-react-original"></i>
        </div>
        <div className="column small-12 medium-3 skill-box" /* data-equalizer-watch */>
          <i className="devicon-html5-plain-wordmark"></i>&nbsp;<i className="devicon-css3-plain-wordmark"></i>
        </div>
        <div className="column small-12 medium-3 skill-box align-stretch" /* data-equalizer-watch */>
          <i className="devicon-mongodb-plain-wordmark"></i>
          <i className="devicon-redis-plain-wordmark"></i>
        </div>
        <div className="column small-12 medium-3 skill-box" /* data-equalizer-watch */>
          <i className="devicon-mysql-plain-wordmark"></i>&nbsp;<i className="devicon-postgresql-plain-wordmark"></i>
        </div>
        <div className="column skill-box small-12 medium-3" /* data-equalizer-watch */>
          <i className="devicon-java-plain-wordmark"></i>
          <i className="devicon-cplusplus-plain"></i>
        </div>
      </div>
    </ParallaxBanner>
  );
}

export default Skills;
