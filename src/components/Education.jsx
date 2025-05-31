import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Education() {
  return (
    <Fade triggerOnce duration={500}>
      <div className="column small-12 large-6" id="education">
        <h1>Education</h1>
        <h3>Harvard University</h3>
      <h4>Cambridge, MA</h4>
      <h4>Harvard Summer School</h4>
      <h5>STAT-100: Introduction to Quantitative Methods</h5>
      <h6>July 2018 to Aug 2018</h6>

      <h3>Northeastern University</h3>
      <h4>Boston, MA</h4>
      <h4>College of Computer and Information Science</h4>
      <h5>Master of Science in Computer Science</h5>
      <h6>Sept 2015 to Dec 2017</h6>
      <h6>Courses</h6>
      <ul>
        <li>Foundations of Artificial Intelligence</li>
        <li>Data Mining</li>
        <li>Information Retrieval</li>
        <li>Algorithms</li>
        <li>Parallel Data Processing with Hadoop</li>
        <li>Web Development</li>
        <li>Programming Design Paradigms</li>
      </ul>

      <h3>Heriot-Watt University</h3>
      <h4>Dubai, UAE</h4>
      <h5>Master of Science in Computer Systems Management, Distinction with Honors.</h5>
      <h6>January 2012 to November 2013</h6>
      <h6>Courses</h6>
      <ul>
        <li>eCommerce Technologies</li>
        <li>Databases</li>
        <li>Systems Programming</li>
        <li>Network Applications</li>
        <li>Mobile Programming</li>
      </ul>

      <h3>University of Kerala</h3>
      <h4>Kerala, India</h4>
      <h5>Bachelor of Technology in Electronics and Communication Engineering, First Class.</h5>
      <h6>October 2006 to Aug 2010</h6>
      <h6>Courses</h6>
      <ul>
        <li>Programming with C++</li>
        <li>Digital Logic</li>
        <li>Microprocessors</li>
      </ul>
      </div>
    </Fade>
  );
}

export default Education;
