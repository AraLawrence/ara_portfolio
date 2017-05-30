import React from 'react';
import Headline from './Headline';
import aboutStyle from '../../styles/aboutStyle.sass';

const About = () => (
  <div className="page-body" style={aboutStyle}>
    <div className="about-text">
      <div className="about-head">
        <Headline text="I'm Ara" />
        <p>But you probably knew that</p>
      </div>
      <div className="about-content">
        <p>In my past I have held positions calling for a great
        deal of creativity and precision. As a web developer I
        employ these skills with an intent toward elegance
        in technology and design.</p>
        <p>I am highly capable across the stack, and have experience with
        frameworks like Node, Rails, and Django. I also have aptitude in many modern
        JavaScript technologies, including Angular and React.</p>
        <p>Throughout my life I have always loved to create. Now I do that
        through code. If you have an exciting project and are looking for a
        driven full stack developer, I would love to hear from you.</p>
      </div>
    </div>
    <div className="about-img">
      <img src="./assets/images/space.png" alt="Outline of the space needle" />
    </div>
  </div>
);

export default About;
