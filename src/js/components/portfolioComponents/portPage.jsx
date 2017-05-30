import { string, shape } from 'prop-types';
import React from 'react';
import PortTab from './portTab';
// import Link from 'react-router-dom';

const PortPage = props => (
  <div className="port-page-body page-body">
    <PortTab data={props.data} />
    <div className="port-page-img">
      <img src={props.data.gif} alt="Gif of project" />
    </div>
    <div className="port-page-desc">
      <p>{props.data.text}</p>
    </div>
    <div className="port-page-links">
      <h1>
        <i className="fa fa-external-link" />
        <a href={props.data.links[1]} target="_blank" rel="noopener noreferrer">
          {props.data.links[0]}
        </a>
      </h1>
      <h1>
        <i className="fa fa-github-alt" />
        <a href={props.data.links[3]} target="_blank" rel="noopener noreferrer">
          {props.data.links[2]}
        </a>
      </h1>
    </div>
    <div className="arrow">
      {/* <Link to="/work"><img src="./assets/images/arrow.png" alt="Outline of arrow"/></Link>*/}
    </div>
  </div>
);
PortPage.propTypes = {
  data: shape({
    text: string,
    git: string,
  }).isRequired,
};

export default PortPage;
