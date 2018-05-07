import React from 'react';
import FontAwesomeIcon  from '@fortawesome/react-fontawesome';

const NotFound = () =>{

    let styles ={
        textAlign: 'center',
        marginTop: '3%',
        backgroundColor: '#e3e3e3',
        paddingTop: '1%',
        paddingBottom: '3%',
        marginLeft: '10%',
        marginRight: '10%',
        h3:{
            color: '#B30FB7',
            marginBottom: '3%',
            marginTop: '3%'
        },
        p1:{
            fontSize: '130%',
            fontWeight: '200'
        },
        error:{
            marginTop: '2%',
            marginBottom: '3%'
        }


    };
    return(
        <div className="under-construction" style={styles}>
            <h3 style={styles.h3}>Hoooooooooooooooooopsssss!!!!!!!!!</h3>
            <FontAwesomeIcon icon='exclamation-circle' size='6x' color='#EA2B33' style={styles.error}/>
            <p style={styles.p1}>There is nothing under this url. 
                Clear what you added to the url to go to the home page</p>

        </div>
    );
};

export default NotFound;