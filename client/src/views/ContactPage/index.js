import React, { Component } from 'react';

import Navbar from './../../components/Navbar/index';
import Contact from './../../components/Contact/index';
import Footer from './../../components/Footer/index';


export default class ContactPage extends Component{
    render() {
        return(
            <div>
                <Navbar />
                <Contact />
                <Footer />
            </div>
        );
    }
}