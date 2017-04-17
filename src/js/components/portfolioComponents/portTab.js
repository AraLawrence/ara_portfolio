import React from 'react';

const PortTab = React.createClass({
  render() {
    let title = this.props.data.tab.title;
    let text = this.props.data.tab.text;
    let color = this.props.data.tab.color;
    let style = require('../../../styles/portComponentStyles/portTabStyle.sass');
    return (
      <div className="port-tab" style={style}>
        <div className="color" style={{backgroundColor: color}}></div>
        <div className="tab-text">
          <h1>{title}</h1>
          <p>({text})</p>
        </div>
      </div>
    );
  }
});

module.exports = PortTab;
