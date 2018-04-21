import React from 'react';

const ContactForm = () =>{
    return(
        <div className="contact-form">
            <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-6 ">
                    <input type="email" className="form-control"  />
                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" id="textArea3" rows="5"></textarea>
            </div>
                <input type="text" className="form-control" id="textInput4" 
                placeholder=" 1 + 1 = ?   Enter the result here"/>
            <button type="submit" className="btn btn-lg contact-btn">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;