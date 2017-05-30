import { string, shape } from 'prop-types';
import React from 'react';
import style from '../../../styles/portComponentStyles/portTabStyle.sass';

const PortTab = props => (
  <div className="port-tab" style={style}>
    <div className="color" style={{ backgroundColor: props.data.tab.color }} />
    <div className="tab-text">
      <h1>{ props.data.tab.title }</h1>
      <p>({ props.data.tab.text })</p>
    </div>
  </div>
);
PortTab.propTypes = {
  data: shape({
    tab: shape({
      color: string,
      title: string,
      text: string,
    }),
  }).isRequired,
};

export default PortTab;
