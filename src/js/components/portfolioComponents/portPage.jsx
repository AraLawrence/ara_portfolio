import { string, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import PortTab from './portTab';
import style from '../../../styles/portComponentStyles/portPageStyle.sass';

const PortPage = props => (
  <div className="port-page-body page-body" style={style}>
    <PortTab data={props.data} />
    <div className="port-page-img">
      <img src={props.data.gif} alt="Gif of project" />
    </div>
    <div className="port-page-desc">
      <p>{props.data.text}</p>
    </div>
    <div className="port-page-links">
      <h1>
        <img
          className="ext-icon"
          src="./assets/images/external-link.svg"
          alt="Icon for external link"
        />
        <a href={props.data.link.address} target="_blank" rel="noopener noreferrer">
          {props.data.link.text}
        </a>
      </h1>
      {props.data.link.github &&
        <h1>
          <a href={props.data.link.github} target="_blank" rel="noopener noreferrer">
            <img src="./assets/images/github.svg" alt="Github icon" />
          </a>
        </h1>
      }
    </div>
    <div className="arrow">
      <Link to="/work"><img src="./assets/images/arrow.png" alt="Outline of arrow" /></Link>
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
