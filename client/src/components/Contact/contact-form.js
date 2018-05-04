import React from 'react';
import { connect } from 'react-redux';
import fetch from 'cross-fetch';

import {
	withRouter
} from 'react-router-dom';


class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            text: '',
            verification: '',
            visible: 'hide'
        };
        this.baseState = this.state;
    }
    
    handleEmailSending (){
        this.postData('http://localhost:3001/sending_email', 
        {
            name: this.state.name,
            email: this.state.email,
            text: this.state.text
        })
        .then(data => console.log(data)) // JSON from `response.json()` call
        .then(this.resetForm())
        .then(this.props.history.push('/thank-you'))
        .catch(error => console.error(error));
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();
        if (this.state.verification !== '2'){
            this.setState({visible: ''});
        }else{
            this.setState({visible: 'hide'}); 
            this.handleEmailSending(); 
        }
    }

    resetForm = () => {
        this.setState(this.baseState);
    }
 
    postData(url, data) {
        return fetch(url, {
          body: JSON.stringify(data), // must match 'Content-Type' header
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
        })
        .then(response => response.json()) // parses response to JSON
    }

    handleNameChange = (e) =>{
        this.setState({
            name: e.target.value
        });
    }

    handleEmailChange = (e) =>{
        this.setState({
            email: e.target.value
        });
    }

    handleTextChange = (e) =>{
        this.setState({
            text: e.target.value
        });
    }

    handleVerificationChange = (e) =>{
        this.setState({
            verification: e.target.value
        });
    }

    render(){

        return(
        <div className="contact-form">
            <form onSubmit={this.handleFormSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" 
                    placeholder = {this.props.name} required onChange={this.handleNameChange} value={this.state.name}/>
                </div>
                <div className="form-group col-md-6 ">
                    <input type="email" className="form-control" 
                    placeholder = {this.props.email} required onChange={this.handleEmailChange} value={this.state.email}/>
                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" id="textArea3" rows="5" 
                placeholder={this.props.text} onChange={this.handleTextChange}
                value={this.state.text} required >
                </textarea>
            </div>
            <input type="text" className="form-control" id="textInput4" 
            placeholder= {this.props.verification} required onChange={this.handleVerificationChange} value={this.state.verification}/>
            <div className={"verification-error " + this.state.visible}> {this.state.verification} is not equal to the sum of 1 + 1, please enter a correct number`</div>
            {/* <input type="text" className="form-control" id="textInput4" 
            placeholder=" 1 + 1 = ?   Enter the result here"/> */}
            <button type="submit" className="btn btn-lg contact-btn">Send</button>
            </form>
        </div>
    );
}
};

const mapStateToProps = state => {
    return {
      name: state.placeholders.name,
      email: state.placeholders.email,
      text: state.placeholders.text,
      verification: state.placeholders.verification,
    }
  };


export default connect(
    mapStateToProps
  )(withRouter(ContactForm));