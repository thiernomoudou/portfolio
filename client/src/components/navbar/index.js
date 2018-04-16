import React, { Component } from 'react';
import { Link } from 'react-router';

import persLogo from './../../images/pers_logo.svg';


function Navbar(props){

    let styles ={
        logo: {
            height:'60px'
        },
        font :{
            color: 'red'
        }
    };
    return(
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={[persLogo]} style={styles.logo} alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav" id='navbar-right' >
                    <a className="nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Projects</a>
                    <a className="nav-item nav-link"  href="#">Blog</a>
                    <a className="nav-item nav-link" href="#">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;