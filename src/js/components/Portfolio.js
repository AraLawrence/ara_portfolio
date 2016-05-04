import React from 'react';
import Headline from './Headline.js';
import PortTab from './portfolioComponents/portTab.js';
import { Link } from 'react-router'

const Portfolio = React.createClass({
  render() {
    let pageStyle = require('../../styles/pageStyles.sass');
    let portStyle = require('../../styles/portStyle.sass');
    // TODO allow these to draw from portContent.js and name them correctly
    let unvo = {title: "Unvo", text: "anonymous friend convo with Node.js and Socket.io", color: "#7e57c2"};
    let lost = {title: "Pennypost", text: "Full stack work on Node/Angular app", color: "#00D5A5"};
    let story = {title: "ChoiceMap", text: "Collaborative work on frontend and API development", color: "#cccccc"};
    let river = {title: "Clowder", text: "Rails/React multi location event tracker", color: "#911146"};
    return (
      <div style={pageStyle, portStyle} className="page-body">
        <div className="port-head">
          <Headline data="My work" />
        </div>
        <div className="port-body">
          <Link to="portfolio/unvo"><PortTab data={unvo} /></Link>
          <Link to="portfolio/get-lost"><PortTab data={lost} /></Link>
          <div className="lower-port-body">
            <Link to="portfolio/story-engine"><PortTab data={story} /></Link>
            <Link to="portfolio/clowder"><PortTab data={river} /></Link>
          </div>
        </div>
        <div className="port-img">
          <img src="./assets/images/folder.png" alt="Outline of folder with cat inside" />
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;
