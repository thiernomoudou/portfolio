import React from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
  const { show } = props;
  // Render nothing if the 'show' prop is false
  if (show === false) {
    return null;
  }

  // The gray background
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(f,f,f,0.3)',
    padding: 50,
  };

  // The modal 'window'
  const modalStyle = {
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    maxWidth: 500,
    maxHeight: 20,
    margin: '20em auto',
    padding: 30,
  };

  return (
    <div id='backdrop' style={backdropStyle}>
      <div id='modal' style={modalStyle}>
        <p> Sending email ........ </p>
      </div>
    </div>
  );
}


Modal.propTypes = {
  show: PropTypes.bool,
//   children: PropTypes.node
};

export default Modal;
