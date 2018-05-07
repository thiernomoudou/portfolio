import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

// import mainImage from './../../images/contact-title.svg';
// import mountain from './../../images/mountain-v2.svg';

import mainImage from './../../images/project-title.svg';
import mountain from './../../images/mountain-v2.svg';

import Navbar from './../../components/Navbar/index';
import ProjectBanner from './../../components/ProjectBanner/index';
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
                <ProjectBanner mainImage={mainImage} sideImage={mountain}/>
                <Footer />
            </div>
        );
    }
}