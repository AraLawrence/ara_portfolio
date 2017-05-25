import React from 'react';
import Headline from './Headline.js';
import PortTab from './portfolioComponents/portTab.js';
import portContent from '../content/portContent';
import { Link, Route, Redirect } from 'react-router-dom'

const pageStyle = require('../../styles/pageStyles.sass');
const portStyle = require('../../styles/portStyle.sass');

const Portfolio = ({ match }) => (
  <div style={ pageStyle, portStyle } className="page-body">
    <div className="port-head">
      <Headline data="My work" />
    </div>
    <div className="port-body">
      <Link to={`${match.url}/opencar`}><PortTab data={portContent.opencar} /></Link>
      <Link to={`${match.url}/pennypost`}><PortTab data={portContent.pennypost} /></Link>
      <div className="lower-port-body">
        <Link to={`${match.url}/choicemap`}><PortTab data={portContent.choicemap} /></Link>
        <Link to={`${match.url}/science`}><PortTab data={portContent.science} /></Link>
      </div>
    </div>
    <div className="port-img">
      <img src="./assets/images/folder.png" alt="Outline of folder with cat inside" />
    </div>
  </div>
);

module.exports = Portfolio;
