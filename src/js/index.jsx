import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import { string, shape } from 'prop-types';
// Deprecated
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navbar from './components/Navbar';
import IndexView from './components/IndexView';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import portContent from './content/portContent';
import PortPage from './components/portfolioComponents/portPage';
import style from '../styles/mainStyle.sass';

// App component to render at root
const App = () => (
  <div style={style}>
    <IndexView />
  </div>
);

// Work components
const Unvo = () => (
  <PortPage data={portContent.opencar} />
);
const Lost = () => (
  <PortPage data={portContent.pennypost} />
);
const Story = () => (
  <PortPage data={portContent.choicemap} />
);
const Clowder = () => (
  <PortPage data={portContent.science} />
);

// Component for portfolio page
// subroutes for each portfolio item
const Work = ({ match }) => (
  <div>
    <Route exact path={`${match.url}`} component={Portfolio} />
    <Route path={`${match.url}/opencar`} component={Unvo} />
    <Route path={`${match.url}/pennypost`} component={Lost} />
    <Route path={`${match.url}/choicemap`} component={Story} />
    <Route path={`${match.url}/science`} component={Clowder} />
  </div>
);
// Validate match prop
Work.propTypes = {
  match: shape({
    url: string,
  }),
};

// Home component, render Navbar and route components
const Home = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

render(React.createElement(Home), document.getElementById('site'));

// You were using this for transitions
// <ReactCSSTransitionGroup
//   component="div"
//   transitionName="example"
//   transitionEnterTimeout={500}
//   transitionLeaveTimeout={500}
// >
//   {React.cloneElement(props.children, {
//     key: props.location.pathname,
//   })}
// </ReactCSSTransitionGroup>
