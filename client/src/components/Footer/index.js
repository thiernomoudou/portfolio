import React from 'react';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <div className='footer text-center'>
            <div class="navbar-nav  navbar-expand-lg justify-content-center">
                <a class="nav-item nav-link active" target="_blank" href="https://www.linkedin.com/in/thierno-souleymane-diallo-440239137/">LinkedIn</a>
                <a class="nav-item nav-link" target="_blank" href="https://github.com/thiernomoudou/">Github</a>
                <a class="nav-item nav-link" href="mailto:tsdmoudou@gmail.com">Contact me</a>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p>© {year} <a href="/">Thierno Souleymane Diallo</a>. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;