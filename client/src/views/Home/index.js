import React, { Component } from 'react';

import Navbar from './../../components/Navbar/index';
import Greeting from './../../components/Greeting/index';
import Banner from './../../components/Banner/index';


export default class HomePage extends Component{
    render() {
        return(
            <div>
                <Navbar />
                <Greeting />
                <Banner />
            </div>
        );
    }
}