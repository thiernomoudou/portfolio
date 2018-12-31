import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='footer text-center'>
      <div
        className='navbar-nav navbar-expand-lg justify-content-center'
      >
        <a
          className='nav-item nav-link active'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/thierno-souleymane-diallo-440239137/'
        >
          LinkedIn
        </a>
        <a
          className='nav-item nav-link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/thiernomoudou/'
        >
          Github
        </a>
        <a
          className='nav-item nav-link'
          href='mailto:tsdmoudou@gmail.com'
        >
          Contact me
        </a>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <p>
            ©
            {year}
            <a href='/'>
              Thierno Souleymane Diallo.
            </a>
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
