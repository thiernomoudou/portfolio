import React from 'react';
import { connect } from 'react-redux';

import { formSubmit, formChange } from './../../redux/actionCreators';

const ContactForm = (props) =>{
    return(
        <div className="contact-form">
            <form onSubmit={props.handleSumbitForm}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input name='name' type="text" className="form-control" 
                    placeholder = {props.name} required={true} onChange={handleChange} />
                </div>
                <div className="form-group col-md-6 ">
                    <input name='email' type="email" className="form-control" 
                    placeholder = {props.email} required={true} onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <textarea name='text' className="form-control" id="textArea3" rows="5" 
                placeholder={props.text} onChange={handleChange} >
                </textarea>
            </div>
            <input name='verification' type="text" className="form-control" id="textInput4" 
            placeholder= {props.verification} required={true} onChange={handleChange} />
            {/* <input type="text" className="form-control" id="textInput4" 
            placeholder=" 1 + 1 = ?   Enter the result here"/> */}
            <button type="submit" className="btn btn-lg contact-btn">Send</button>
            </form>
        </div>
    );
};

const handleChange = e => (alert(e.target.value));

const mapStateToProps = state => {
    return {
      name: state.placeholders.name,
      email: state.placeholders.email,
      text: state.placeholders.text,
      verification: state.placeholders.verification,
    }
  };

const mapDispatchToProps = dispatch => ({
handleSumbitForm: () => dispatch(formSubmit()),
// handleChange: (e) => dispatch(formChange(e))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactForm);