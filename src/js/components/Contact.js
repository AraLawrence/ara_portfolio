import React from 'react'
import Headline from './Headline.js';

var xhr = new XMLHttpRequest();

const Contact = React.createClass({
  getInitialState() {
    return {
      value: "",
      background: "",
      buttonText: "Send",
      buttonClass: "activated",
      textClass: "unsent"
    };
  },
  handleChange(event) {
    this.setState({value: event.target.value});
  },
  handleClick(e) {
    e.preventDefault();
    let message = "text=" + this.state.value;

    xhr.open('POST', '/email', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(message);

    this.setState({value: "", background: "#D8D8D8",
    textClass: "sent", buttonClass: "", buttonText: "Thanks!"});
  },
  render() {
    let pageStyle = require('../../styles/pageStyles.sass');
    let contactStyle = require('../../styles/contactStyle.sass');
    return (
      <div style={pageStyle, contactStyle} className="page-body">
        <div className="contact-head">
          <Headline data="Thoughts?" />
          <p>Just want to say hi?</p>
        </div>
        <div className="contact-body">
          <div className="contact-body-text">
            <p>Something you'd like to work on together?</p>
            <h1>Send me a message!</h1>
          </div>
          <div className="contact-img">
            <img src="./assets/images/letter.png" />
          </div>
          <form>
            <textarea value={this.state.value} onChange={this.handleChange}></textarea>
              <div style={{backgroundColor: this.state.background}}
              onClick={this.handleClick} className={this.state.buttonClass + " submit-btn"}>
                <div className={this.state.textClass}>{this.state.buttonText}</div>
              </div>
          </form>
          <h2>You can also find me at these places:</h2>
          <div className="social-links">
            <a href="https://github.com/AraLawrence" target="_blank"><i className="fa fa-github-alt"></i></a><a href="https://www.linkedin.com/in/aralawrence" target="_blank"><i className="fa fa-linkedin"></i></a>
            <div><i className="fa fa-envelope-o"></i><span>ara.e.lawrence@gmail.com</span></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Contact;
