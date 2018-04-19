import React, { Component } from 'react';

import Navbar from './../../components/Navbar/index';
import Greeting from './../../components/Greeting/index';
import Banner from './../../components/Banner/index';
import Presentation from './../../components/Presentation/index';
import CallToAction from './../../components/CallToAction/index';


export default class HomePage extends Component{
    render() {
        return(
            <div>
                <Navbar />
                <Greeting />
                <Banner />
                <Presentation />
                <CallToAction />
            </div>
        );
    }
}