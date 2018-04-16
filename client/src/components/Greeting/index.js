import React, { Component } from 'react';

import welcomeMessage from './../../images/welcome-message.svg';

export default function Greeting (props){
    
    let styles ={
        message: {
            height:'20em',
        }
    };
    return (
        <div className="welcome-message">
            <img src={welcomeMessage} style={styles.message} className="img-fluid" alt="Greeting image"/>
            <h5> A Python and Javascript developer. </h5>
        </div>
    );

}