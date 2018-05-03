import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Navbar from './../../components/Navbar/index';
import Greeting from './../../components/Greeting/index';
import Banner from './../../components/Banner/index';
import Presentation from './../../components/Presentation/index';
import CallToAction from './../../components/CallToAction/index';
import Footer from './../../components/Footer/index';


export default class HomePage extends Component{
    render() {
        return(
            <div>
                <Helmet>
                    <title>Home page Thierno Souleymane Diallo</title>
                    <meta name="author" content="Thierno Souleymane Diallo" />
                    <meta name="description" content="Thierno Souleymane Diallo, Guinean Web Developer passionnate about IT and Entrepreunership" />
                </Helmet>   
                <Navbar />
                <Greeting />
                <Banner />
                <Presentation />
                <CallToAction />
                <Footer />
            </div>
        );
    }
}