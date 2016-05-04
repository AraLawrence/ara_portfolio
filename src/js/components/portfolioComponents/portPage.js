import React from 'react';
import PortTab from './portTab.js';
import { Link } from 'react-router';

const PortPage = React.createClass({
  // TODO refactor this when you have more time
  render() {
    let style = require('../../../styles/portComponentStyles/portPageStyle.sass');
    if (this.props.data.links[3]) {
      return (
        <div className="port-page-body page-body">
          <PortTab data={this.props.data.tab} />
          <div className="port-page-img">
             <img src={this.props.data.gif} alt="Gif of project"/>
          </div>
          <div className="port-page-desc">
            <p>{this.props.data.text}</p>
          </div>
          <div className="port-page-links">
            <h1><i className="fa fa-external-link"></i><a href={this.props.data.links[1]} target="_blank">{this.props.data.links[0]}</a></h1>
            <h1><i className="fa fa-github-alt"></i><a href={this.props.data.links[3]} target="_blank">{this.props.data.links[2]}</a></h1>
          </div>
          <div className="arrow">
            <Link to="/portfolio"><img src="./assets/images/arrow.png" alt="Outline of arrow"/></Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="port-page-body page-body">
          <PortTab data={this.props.data.tab} />
          <div className="port-page-img">
             <img src={this.props.data.gif} alt="Gif of project"/>
          </div>
          <div className="port-page-desc">
            <p>{this.props.data.text}</p>
          </div>
          <div className="port-page-links">
            <h1><i className="fa fa-external-link"></i><a href={this.props.data.links[1]} target="_blank">{this.props.data.links[0]}</a></h1>
          </div>
          <div className="arrow">
            <Link to="/portfolio"><img src="./assets/images/arrow.png" alt="Outline of arrow"/></Link>
          </div>
        </div>
      );
    }
  }
});

module.exports = PortPage;
