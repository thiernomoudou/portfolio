import React from 'react';
import { Link } from 'react-router-dom';

import persLogo from '../../images/pers_logo.svg';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stick: 'sticky-top',
    };
  }

  componentWillMount() {
    this.updateDimensions();
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  /**
  * Calculate & Update state of new dimensions
  */
  updateDimensions = () => {
    if (window.innerWidth < 750) {
      this.setState({ stick: '' });
    } else {
      this.setState({ stick: 'sticky-top' });
    }
  }

  render() {
    const { stick } = this.state;
    const styles = {
      logo: {
        height: '60px',
      },
      font: {
        color: 'red',
      },
    };
    return (
      <div className={
        `navbar navbar-expand-lg navbar-light bg-light ${stick}`}
      >
        <Link className='navbar-brand app-logo' to='/'>
          <img src={[ persLogo ]} style={styles.logo} alt='' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav' id='navbar-right'>
            <Link className='nav-item nav-link' to='/'>
              Home
              <span className='sr-only'>
                (current)
              </span>
            </Link>
            <Link className='nav-item nav-link' to='/projects'>Projects</Link>
            <Link className='nav-item nav-link' to='/blog'>Blog</Link>
            <Link className='nav-item nav-link' to='/contact'>Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
