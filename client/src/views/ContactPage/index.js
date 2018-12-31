import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../../components/Navbar/index';
import Contact from '../../components/Contact/index';
import Footer from '../../components/Footer/index';


export default function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Contact page Thierno Souleymane Diallo</title>
        <meta name='author' content='Thierno Souleymane Diallo' />
        <meta
          name='description'
          content='Contact form  thierno souleymane diallo'
        />
      </Helmet>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
