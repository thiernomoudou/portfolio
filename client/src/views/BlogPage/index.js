import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Navbar from './../../components/Navbar/index';
import UnderConstructionMessage from './../../components/UnderConstruction/index';
import Footer from './../../components/Footer/index';


export default class Blog extends Component{
    
    render() {
        
        return(
            <div>
                <Helmet>
                    <title>Blog Thierno Souleymane Diallo</title>
                    <meta name="author" content="Thierno Souleymane Diallo" />
                    <meta name="description" content="Blog page from  thierno souleymane diallo" />
                </Helmet>
                <Navbar />
                <UnderConstructionMessage />
                <Footer />
            </div>
        );
    }
}