import React from 'react';
import Headline from './Headline';
import contactStyle from '../../styles/contactStyle.sass';

const xhr = new XMLHttpRequest();
const buttonState = {
  unsent: {
    value: '',
    background: '',
    buttonText: 'Send',
    buttonClass: 'activated',
    textClass: 'unsent',
  },
  sent: {
    value: '',
    background: '#D8D8D8',
    buttonText: 'Thanks!',
    buttonClass: '',
    textClass: 'sent',
  },
};

function submit(message) {
  xhr.open('POST', '/email', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(message);
  return buttonState.sent;
}

class Contact extends React.Component {
  constructor() {
    super();
    this.state = buttonState.unsent;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    const message = `text=${this.state.value}`;
    this.setState(submit(message));
  }

  render() {
    return (
      <div style={contactStyle} className="page-body">
        <div className="contact-head">
          <Headline text="Thoughts?" />
          <p>Just want to say hi?</p>
        </div>
        <div className="contact-body">
          <div className="contact-body-text">
            <p>Something you&apos;d like to work on together?</p>
            <h1>Send me a message!</h1>
          </div>
          <div className="contact-img">
            <img
              src="./assets/images/letter.png"
              alt="Outline of letters being loaded into a rocketship"
            />
          </div>
          <form>
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              id="messages"
            />
            <div
              role="button"
              tabIndex={0}
              style={{ backgroundColor: this.state.background }}
              onClick={this.handleClick}
              className={`${this.state.buttonClass} submit-btn`}
            >
              <div className={this.state.textClass}>{this.state.buttonText}</div>
            </div>
          </form>
          <h2>You can also find me at these places:</h2>
          <div className="social-links">
            <a href="https://github.com/AraLawrence" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github-alt" />
            </a>
            <a href="https://www.linkedin.com/in/aralawrence" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" />
            </a>
            <div><i className="fa fa-envelope-o" /><span>ara.e.lawrence@gmail.com</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
