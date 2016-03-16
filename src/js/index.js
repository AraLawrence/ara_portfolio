import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Navbar from './components/Navbar.js';
import IndexView from './components/IndexView.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import PortPage from './components/portfolioComponents/portPage.js';
import portContent from './content/portContent.js';

const App = React.createClass({
  render() {
    let style = require('../styles/mainStyle.sass');
    return (
      <div style={style}>
        <Navbar />

        <ReactCSSTransitionGroup
         component="div"
         transitionName="example"
         transitionEnterTimeout={500}
         transitionLeaveTimeout={500}
        >
         {React.cloneElement(this.props.children, {
           key: this.props.location.pathname
         })}
       </ReactCSSTransitionGroup>
      </div>
    )
  }
});

const Unvo = React.createClass({
  render() {
    return (<PortPage data={portContent.unvo}/>)
  }
});

const Lost = React.createClass({
  render() {
    return (<PortPage data={portContent.lost}/>)
  }
});

const Story = React.createClass({
  render() {
    return (<PortPage data={portContent.story}/>)
  }
});

const River = React.createClass({
  render() {
    return (<PortPage data={portContent.river}/>)
  }
});

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexView} />
      <Route path="about" component={About}/>
      <Route path="portfolio" component={Portfolio}/>
      <Route path="portfolio/unvo" component={Unvo}/>
      <Route path="portfolio/get-lost" component={Lost}/>
      <Route path="portfolio/story-engine" component={Story}/>
      <Route path="portfolio/river" component={River}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('site'));
