import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand app-logo" to="/">
                <img src={[persLogo]} style={styles.logo} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav" id='navbar-right' >
                    <Link className="nav-item nav-link active" to="/">Home<span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/projects">Projects</Link>
                    <Link className="nav-item nav-link"  to="/">Blog</Link>
                    <Link className="nav-item nav-link" to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;