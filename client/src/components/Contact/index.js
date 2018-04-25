import React from 'react';

import contactTitle from './../../images/contact-title.svg';
import mountain from './../../images/mountain-v2.svg';
import ContactForm from './contact-form';

const Contact = () => {

    let styles = {
        contactTitle: {
            height:'12em',
        },

        leftMount:{
            height: '10em',
            marginLeft: '10em'
        },
        rightMount:{
            height: '10em',
            marginLeft: '-4em'
        }
        
    };
    
    return (
        <div className="contact-title">
            <div className='row' >
                <div className="col-md-3 d-none d-sm-none d-md-block" id="contact-banner">
                    <img src={mountain} style={styles.leftMount} className="img-fluid" alt="Greeting"/>
                </div>
                <div className="col-md-6 text-center" id="contact-banner">
                    <img src={contactTitle} style={styles.contactTitle} className="img-fluid" alt="green-mountain"/>
                </div>
                <div className="col-md-3 d-none d-sm-none d-md-block" id="contact-banner">
                    <img src={mountain} style={styles.rightMount} className="img-fluid" alt="green-mountain"/>
                </div>
            </div>
            <p>
                Do you have a project you want to start, or one that need additionnal help,
                send me a note. 
            </p>
            <p>I'm open to discuss and ready to get involved.</p>
            <ContactForm />

        </div>
    );

};

export default Contact;