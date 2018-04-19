import React from 'react';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <div className='footer text-center'>
            <div class="navbar-nav  navbar-expand-lg justify-content-center">
                <a class="nav-item nav-link active" href="#">LinkedIn</a>
                <a class="nav-item nav-link" href="#">Github</a>
                <a class="nav-item nav-link" href="@gmail.com">Contact me</a>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p>© {year} <a href="">Thierno Souleymane Diallo</a>. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;