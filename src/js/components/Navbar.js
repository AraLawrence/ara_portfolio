import React from 'react'
import { Link } from 'react-router'

var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
console.log(isSafari);

const Navbar = React.createClass({
  render() {
    let style = require('../../styles/navbar.sass');
    let svgClass;
    if (isSafari) {
      svgClass = "svg-contain-safari";
    } else {
      svgClass = "svg-contain";
    };
    return (
      <div style={style} className="navbar">
        <div className="logo">
          <Link to="/"><img src="./assets/images/logo.png" alt="Ara logo"/></Link>
        </div>
        <div className="links">
          <div className={svgClass + " left"}>
            <Link to="/about"><svg width="200" height="61">
              <line className="top" x1="0" y1="0" x2="200" y2="0"/>
              <line className="left" x1="0" y1="200" x2="0" y2="-400"/>
              <line className="bottom" x1="200" y1="61" x2="-400" y2="61"/>
              <line className="right" x1="200" y1="0" x2="200" y2="200"/>
	          </svg></Link>
          <Link to="/about" className="text">ABOUT</Link>
          </div>
          <div className={svgClass + " center"}>
            <Link to="/portfolio"><svg width="200" height="61">
              <line className="top" x1="0" y1="0" x2="200" y2="0"/>
              <line className="left" x1="0" y1="200" x2="0" y2="-400"/>
              <line className="bottom" x1="200" y1="61" x2="-400" y2="61"/>
              <line className="right" x1="200" y1="0" x2="200" y2="200"/>
	          </svg></Link>
          <Link to="/portfolio" className="text">PORTFOLIO</Link>
          </div>
          <div className={svgClass + " right"}>
            <Link to="/contact"><svg width="200" height="61">
              <line className="top" x1="0" y1="0" x2="200" y2="0"/>
              <line className="left" x1="0" y1="200" x2="0" y2="-400"/>
              <line className="bottom" x1="200" y1="61" x2="-400" y2="61"/>
              <line className="right" x1="200" y1="0" x2="200" y2="200"/>
	          </svg></Link>
            <Link to="/contact" className="right">CONTACT</Link>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
