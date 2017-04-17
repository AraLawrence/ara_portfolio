import React from 'react';
import Headline from './Headline.js';

const IndexView = React.createClass({
  render() {
    let pageStyle = require('../../styles/pageStyles.sass');
    let indexStyle = require('../../styles/indexStyle.sass');
    return (
      <div className="page-body" style={pageStyle, indexStyle}>
        <div className="index-head">
          <Headline data="Ara Lawrence" />
          <img src="./assets/images/cpu.png" className="cpu-img" alt="Ouline of computer monitor"/>
        </div>
        <div className="index-content">
          <h2>I am a web developer</h2>
          <p>resolved toward elegant solutions and delightful experiences</p>
          <h1>I'd love to create something with you</h1>
        </div>
      </div>
    )
  }
});

module.exports = IndexView;
