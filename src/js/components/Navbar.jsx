import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import style from '../../styles/navbar.sass';

// There was a safari issue?
// const isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
const svgClass = 'svg-contain';

// NavButton component to be displayed in NavBar
// props - position: position class to apply (left, center, right)
// props - text: text to display and link to, should be uppercase
const NavButton = props => (
  <div className={`${svgClass} ${props.position}`}>
    <Link to={`/${props.text.toLowerCase()}`}><svg width="200" height="61">
      <line className="top" x1="0" y1="0" x2="200" y2="0" />
      <line className="left" x1="0" y1="200" x2="0" y2="-400" />
      <line className="bottom" x1="200" y1="61" x2="-400" y2="61" />
      <line className="right" x1="200" y1="0" x2="200" y2="200" />
    </svg></Link>
    <Link to={`/${props.text.toLowerCase()}`} className="text">{props.text}</Link>
  </div>
);
// Validate NavButton props
NavButton.propTypes = {
  position: string.isRequired,
  text: string.isRequired,
};

// Navbar component
const Navbar = () => (
  <div style={style} className="navbar">
    <div className="logo">
      <Link to="/"><img src="./assets/images/logo.png" alt="Ara logo" /></Link>
    </div>
    <div className="links">
      <NavButton position="left" text="ABOUT" />
      <NavButton position="center" text="WORK" />
      <NavButton position="right" text="CONTACT" />
    </div>
  </div>
);

export default Navbar;
