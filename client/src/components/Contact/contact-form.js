import React from 'react';
import { connect } from 'react-redux';
import fetch from 'cross-fetch';

import {
  withRouter,
} from 'react-router-dom';

import Modal from '../Modal/index';

class ContactForm extends React.Component {
  static postData(url, data) {
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
    })
      .then(response => response.json()); // parses response to JSON
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      text: '',
      verification: '',
      visible: 'hide',
      showModal: false,
    };
    this.baseState = this.state;
  }

  handleFormSubmit = (e) => {
    const { verification } = this.state;
    e.preventDefault();
    if (verification !== '2') {
      // Making verification error visible
      this.setState({ visible: '' });
    } else {
      this.setState({ visible: 'hide' });
      this.setState({ showModal: true });
      this.handleEmailSending();
    }
  }

  resetForm = () => {
    this.setState(this.baseState);
  }

  // handling change in the name input field
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  // handling change in the email input field
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleVerificationChange = (e) => {
    this.setState({
      verification: e.target.value,
    });
  }

  handleEmailSending() {
    const deployed = true;
    const { name, email, text } = this.state;
    const { history } = this.props;
    let url;
    if (deployed) {
      url = 'https://thiernomoudou.herokuapp.com/sending_email';
    } else {
      url = 'http://localhost:3001/sending_email';
    }
    // Calling the static method
    ContactForm.postData(url, { name, email, text })
      .then((data) => {
        console.log(data);
        const statusCode = data[0].statusCode;
        if (statusCode === 202 || statusCode === 200) {
          this.setState({ showModal: false });
          this.resetForm();
          history.push('/thank-you');
        } else {
          console.log('Unable to send your email');
        }
      })
      .catch(error => console.error(error));
  }

  render() {
    const {
      name, email, text, verification, visible, showModal,
    } = this.state;
    return (
      <div className='contact-form'>
        <form onSubmit={this.handleFormSubmit}>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <input
                type='text'
                className='form-control'
                placeholder={this.props.name}
                required
                onChange={this.handleNameChange}
                value={name}
              />
            </div>
            <div className='form-group col-md-6 '>
              <input
                type='email'
                className='form-control'
                placeholder={this.props.email}
                required
                onChange={this.handleEmailChange}
                value={email}
              />
            </div>
          </div>
          <div className='form-group'>
            <textarea
              className='form-control'
              id='textArea3'
              rows='5'
              placeholder={this.props.text}
              onChange={this.handleTextChange}
              value={text}
              required
            >
            Your message
            </textarea>
          </div>
          <input
            type='text'
            className='form-control'
            id='textInput4'
            placeholder={this.props.verification}
            required
            onChange={this.handleVerificationChange}
            value={verification}
          />
          <div className={`verification-error ${visible}`}>
            {verification} is not equal to the sum of 1 + 1,
            please enter a correct number which is 2
          </div>
          {/* <input type='text' className='form-control' id='textInput4'
          placeholder=' 1 + 1 = ?   Enter the result here'/> */}
          <button type='submit' className='btn btn-lg contact-btn'>Send</button>
        </form>
        <Modal show={showModal} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.placeholders.name,
    email: state.placeholders.email,
    text: state.placeholders.text,
    verification: state.placeholders.verification,
  };
};


export default connect(
  mapStateToProps,
)(withRouter(ContactForm));
