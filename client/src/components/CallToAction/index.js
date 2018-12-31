import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className='call-to-action text-center'>
      <h2>Projects</h2>
      <FontAwesomeIcon
        icon='tasks'
        size='6x'
        color='#9DC040'
        className='tasks-icon'
      />
      <p>If you have a Project and you think that I can help</p>
      <p>
        <Link to='/contact' className='call-to-action-text'>
          Feel free to shoot me a message
        </Link>
      </p>
      <a className='btn  btn-lg email-button' href='mailto:tsdmoudou@gmail.com'>
        Email Me
      </a>
    </div>
  );
};

export default CallToAction;
