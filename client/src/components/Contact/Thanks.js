import React from 'react';
import {
	withRouter
} from 'react-router-dom';

import Navbar from './../Navbar/index';
import Footer from './../Footer/index';


class ThankPage extends React.Component {

    redirectHomepage = () => {
        this.props.history.push('/');
    }
    render(){
    return(
        <div className="thank-you">
            <Navbar />
            <div className="alert alert-success alert-dismissible fade show thanks text-center" role="alert">
                <p><strong>Thanks for your interest</strong></p>
                 <p> Looking forward to colloborating with you!</p>
                <button type="button" class="close" onClick={this.redirectHomepage} data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <Footer />
        </div>
    );
    }
}


export default withRouter(ThankPage);