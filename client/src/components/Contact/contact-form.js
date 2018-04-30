import React from 'react';
import { connect } from 'react-redux';

class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            text: '',
            verification: ''
        };
    }

    handleNameChange = (e) =>{
        this.setState({
            name: e.target.value
        });
    }

    handleFormSubmit = () =>{
        if (this.state.verification !== '2'){
            alert (`${this.state.verification} is not equal to 2`);
        }else{
            alert (` cool `);
        }
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
                    placeholder = {this.props.name} required={true} onChange={this.handleNameChange} />
                </div>
                <div className="form-group col-md-6 ">
                    <input type="email" className="form-control" 
                    placeholder = {this.props.email} required={true} onChange={this.handleEmailChange}/>
                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" id="textArea3" rows="5" 
                placeholder={this.props.text} onChange={this.handleTextChange} >
                </textarea>
            </div>
            <input type="text" className="form-control" id="textInput4" 
            placeholder= {this.props.verification} required={true} onChange={this.handleVerificationChange} />
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
  )(ContactForm);