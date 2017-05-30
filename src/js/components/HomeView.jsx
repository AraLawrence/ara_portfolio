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
      <h2>I am a web developer</h2>
      <p>resolved toward elegant solutions and delightful experiences</p>
      <h1>I&apos;d love to create something with you</h1>
    </div>
  </div>
);

export default HomeView;
