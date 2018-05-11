import React from 'react';

import welcomeMessage from './../../images/hello.svg';

export default function Greeting (props){
    return (
        <div className="welcome-message">
            <img src={welcomeMessage} className="img-fluid" alt="Greeting"/>
            <h5> A Python and Javascript developer. </h5>
        </div>
    );

}