import React from 'react';
import Headline from './Headline.js';
import PortTab from './portfolioComponents/portTab.js';
import { Link } from 'react-router'

const Portfolio = React.createClass({
  render() {
    let pageStyle = require('../../styles/pageStyles.sass');
    let portStyle = require('../../styles/portStyle.sass');
    let unvo = {title: "Unvo", text: "anonymous friend convo with Node.js and Socket.io", color: "#7e57c2"};
    let lost = {title: "Get Lost", text: "404 redirects for fun with Django", color: "#FF1CC9"};
    let story = {title: "Story Engine", text: "storytelling engine powered by React and jQuery animations", color: "white"};
    let river = {title: "River", text: "React and Flux to create streams by term", color: "#84BBD4"};
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
            <Link to="portfolio/river"><PortTab data={river} /></Link>
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
