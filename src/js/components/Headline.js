import React from 'react';

const Headline = React.createClass({
  render() {
    let style = require('../../styles/headlineStyle.sass');
    let text = this.props.data;
    return (
      <div style={style} className="headline">
        <h1>{text}</h1>
      </div>
    );
  }
});

module.exports = Headline;
