import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Presentation = () => {
  return (
    <div className='presentation'>
      <div className='bio text-center'>
        <h2>Who I am</h2>
        <FontAwesomeIcon
          icon='user'
          size='6x'
          color='#9DC040'
          className='user-icon'
        />
        <p>
          I am passionnate about technologies and software development.
        </p>
        <p>
          And I like building high quality and scalable stuffs for the Web and mobile devices.
        </p>
      </div>
      <div className='tech-tools text-center'>
        <h2>What</h2>
        <FontAwesomeIcon icon='briefcase' size='6x' color='#9DC040' className='briefcase-icon'/>
        <p>
          Primarily, I develop things whith these technologies
        </p>
        <div className='row'>
          <div className='col-md-4'>
            <FontAwesomeIcon
              icon={[ 'fab', 'python' ]}
              size='4x'
              color='#B30FB7'
            />
            <p>Python/Django</p>
          </div>
          <div className='col-md-4'>
            <FontAwesomeIcon icon={[ 'fab', 'js' ]} size='4x' color='#512729' />
            <p>Javascript/ES6</p>
          </div>
          <div className='col-md-4'>
            <FontAwesomeIcon
              icon={[ 'fab', 'node-js' ]}
              size='4x'
              color='#9DC040'
            />
            <p>Node/Express</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <FontAwesomeIcon
              icon={[ 'fab', 'react' ]}
              size='4x'
              color='#B30FB7'
            />
            <p>React/React-Native</p>
          </div>
          <div className='col-md-4'>
            <FontAwesomeIcon
              icon={[ 'fab', 'git' ]}
              size='4x'
              color='#512729'
            />
            <p>Git</p>
          </div>
          <div className='col-md-4'>
            <FontAwesomeIcon icon='database' size='4x' color='#9DC040' />
            <p>Sql</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
