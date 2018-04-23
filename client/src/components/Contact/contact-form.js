import React from 'react';

const ContactForm = (props) =>{
    return(
        <div className="contact-form">
            <form onSubmit={props.handleSumbitForm}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" 
                    placeholder = {props.name}  onChange={props.handleFormChange}/>
                </div>
                <div className="form-group col-md-6 ">
                    <input type="email" className="form-control" 
                    onChange={props.handleFormChange} placeholder = {props.email} />
                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" id="textArea3" rows="5" 
                 onChange={props.handleFormChange}>
                    {props.text} 
                </textarea>
            </div>
            <input type="text" className="form-control" id="textInput4" 
            placeholder= {props.verification}  onChange={props.handleFormChange} />
            {/* <input type="text" className="form-control" id="textInput4" 
            placeholder=" 1 + 1 = ?   Enter the result here"/> */}
            <button type="submit" className="btn btn-lg contact-btn">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;