import React from 'react';
import Headline from './Headline.js';
import PortTab from './portfolioComponents/portTab.js';
import portContent from '../content/portContent.js';
import { Link } from 'react-router'

const Portfolio = React.createClass({
  render() {
    let pageStyle = require('../../styles/pageStyles.sass');
    let portStyle = require('../../styles/portStyle.sass');
    return (
      <div style={pageStyle, portStyle} className="page-body">
        <div className="port-head">
          <Headline data="My work" />
        </div>
        <div className="port-body">
          <Link to="portfolio/opencar"><PortTab data={portContent.opencar} /></Link>
          <Link to="portfolio/pennypost"><PortTab data={portContent.pennypost} /></Link>
          <div className="lower-port-body">
            <Link to="portfolio/choicemap"><PortTab data={portContent.choicemap} /></Link>
            <Link to="portfolio/science"><PortTab data={portContent.science} /></Link>
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
