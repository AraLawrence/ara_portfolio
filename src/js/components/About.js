import React from 'react';
import Headline from './Headline.js';

const About = React.createClass({
  render() {
    let aboutStyle = require('../../styles/aboutStyle.sass');
    let pageStyle = require('../../styles/pageStyles.sass');
    return (
      <div className="page-body" style={pageStyle, aboutStyle}>
        <div className="about-text">
          <div className="about-head">
            <Headline data="I'm Ara" />
            <p>But you probably knew that</p>
          </div>
          <div className="about-content">
            <p>What you may not have known is that before
            before becoming a  web developer I held positions as
            varied as welder, program director, and educator. </p>
            <p>This past has allowed me to develop excellent
            interpersonal sensibilities, and an aptitude
            for abstract reasoning and creativity.</p>
            <p>I’ve always loved to create. Now I do that
            through code. I do collaborative full stack development
            with an intent toward elegance in technology and design.</p>
          <p>I also love to hike, eat, and read.</p>
          </div>
        </div>
        <div className="about-img">
          <img src="./assets/images/space.png" alt="Outline of the space needle"/>
        </div>
      </div>
    );
  }
});

module.exports = About;
