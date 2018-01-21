import React from 'react';
import Headline from './Headline';
import indexStyle from '../../styles/indexStyle.sass';

const HomeView = () => (
  <div className="page-body" style={indexStyle}>
    <div className="index-head">
      <Headline text="Ara Lawrence" />
      <img src="./assets/images/cpu.png" className="cpu-img" alt="Ouline of computer monitor" />
    </div>
    <div className="index-content">
      <h2>I am a QA Engineer</h2>
      <h2>Resolved toward actionable and efficient tests and test infrastructure</h2>
    </div>
  </div>
);

export default HomeView;
