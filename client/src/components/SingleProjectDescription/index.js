import React from 'react';

const SingleProjectDescription = (props) => {
  const {
    bgColor, showButton, img, alt, projectTitle,
    briefDescription, description, hostname,
  } = props;
  const projectStyles = {
    backgroundColor: bgColor,
  };

  return (
    <div className='project-description text-center' style={projectStyles}>
      <img src={img} alt={alt} className='project-desc-image' />
      <h2>{projectTitle}</h2>
      <p className='brief-description'>
        {briefDescription}
      </p>
      <p className='description'>
        {description}
      </p>
      {/* this button shows only if  the value of the show props in not null or undefined */}
      {showButton === true
      && (
      <a
        className='btn btn-lg project-btn'
        target='_blank'
        rel='noopener noreferrer'
        href='https://univ-erp.herokuapp.com/'
      >
          View on
          {hostname}
      </a>
      )}
    </div>
  );
};

export default SingleProjectDescription;
