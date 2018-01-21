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
        <p>In my past I have held many positions calling for a great
        deal of creativity and precision. As a QA engineer I
        employ these skills with an intent toward elegance
        in technology and design.</p>
        <p> I have experience in JavaScript and Python, and a depth of experience
        in automation, BDD testing technologies, and Node.js. I have a particular
        interest in automated testing within mobile and embedded contexts, as well as
        building actionable and efficient test infrastructure.</p>
        <p> I communicate effectively, learn quickly, and love coding.</p>
      </div>
    </div>
    <div className="about-img">
      <img src="./assets/images/space.png" alt="Outline of the space needle" />
    </div>
  </div>
);

export default About;
