import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Navbar from './../../components/Navbar/index';
import Contact from './../../components/Contact/index';
import Footer from './../../components/Footer/index';


export default class ProjectPage extends Component{
    render() {
        return(
            <div>
                <Helmet>
                    <title>Project page Thierno Souleymane Diallo</title>
                    <meta name="author" content="Thierno Souleymane Diallo" />
                    <meta name="description" content="Project page from  thierno souleymane diallo" />
                </Helmet>
                <Navbar />
                <Footer />
            </div>
        );
    }
}