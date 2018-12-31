import React from 'react';


const UnderConstructionMessage = () => {
  const styles = {
    textAlign: 'center',
    marginTop: '3%',
    h3: {
      color: '#B30FB7',
      marginBottom: '3%',
      marginTop: '8%',
    },
    p1: {
      fontSize: '130%',
      fontWeight: '600',
    },
  };
  return (
    <div className='under-construction' style={styles}>
      <h3 style={styles.h3}>Welome to my blog</h3>
      <p
        style={styles.p1}
      >
        Thanks for your interest. The blog is under construction.
      </p>
      <p style={styles.p1}>It will be available soon!</p>
    </div>
  );
};

export default UnderConstructionMessage;
