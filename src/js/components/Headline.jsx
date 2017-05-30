import { string } from 'prop-types';
import React from 'react';
import style from '../../styles/headlineStyle.sass';

const Headline = props => (
  <div style={style} className="headline">
    <h1>{props.text}</h1>
  </div>
);
Headline.propTypes = {
  text: string.isRequired,
};

module.exports = Headline;
