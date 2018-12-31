import React from 'react';

import banner from '../../images/banner-v2.svg';
import mountain from '../../images/mountain-v2.svg';


const Banner = () => {
  const styles = {
    main: {
      height: '30em',
      width: '100%',
    },

    leftMount: {
      height: '30em',
      width: '120%',
    },
    rightMount: {
      height: '30em',
      width: '100%',
    },
  };

  return (
    <div className='banner'>
      <div className='row'>
        <div className='col-md-3 d-none d-sm-none d-md-block'>
          <img
            src={mountain}
            style={styles.leftMount}
            alt='Banner showing some of my skills'
          />
        </div>
        <div className='col-md-6 '>
          <img
            src={banner}
            className='banner-img'
            alt='Banner showing some of my skills'
          />
        </div>
        <div className='col-md-3 d-none d-sm-none d-md-block'>
          <img
            src={mountain}
            style={styles.rightMount}
            alt='Banner showing some of my skills'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
