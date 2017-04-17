import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Navbar from './components/Navbar.js';
import IndexView from './components/IndexView.js';
import About from './components/About.js';
import Work from './components/Portfolio.js';
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
    return (<PortPage data={portContent.opencar}/>)
  }
});

const Lost = React.createClass({
  render() {
    return (<PortPage data={portContent.pennypost}/>)
  }
});

const Story = React.createClass({
  render() {
    return (<PortPage data={portContent.choicemap}/>)
  }
});

const Clowder = React.createClass({
  render() {
    return (<PortPage data={portContent.science}/>)
  }
});

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexView} />
      <Route path="about" component={About}/>
      <Route path="work" component={Work}/>
      <Route path="work/opencar" component={Unvo}/>
      <Route path="work/pennypost" component={Lost}/>
      <Route path="work/choicemap" component={Story}/>
      <Route path="work/science" component={Clowder}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('site'));
