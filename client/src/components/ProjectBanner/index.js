import React from 'react';

const ProjectBanner = (props) => {

    let styles = {
        mainImage: {
            height:'12em',
        },

        leftImage:{
            height: '10em',
            marginLeft: '10em'
        },
        rightImage:{
            height: '10em',
            marginLeft: '-4em'
        }
        
    };
    
    return (
        <div className="contact-title">
        <div className='row' >
            <div className="col-md-3 d-none d-sm-none d-md-block" id="contact-banner">
                <img src={props.sideImage} style={styles.leftImage} className="img-fluid" alt="Greeting"/>
            </div>
            <div className="col-md-6 text-center" id="contact-banner">
                <img src={props.mainImage} style={styles.mainImage} className="img-fluid" alt="green-mountain"/>
            </div>
            <div className="col-md-3 d-none d-sm-none d-md-block" id="contact-banner">
                <img src={props.sideImage} style={styles.rightImage} className="img-fluid" alt="green-mountain"/>
            </div>
        </div>
            <p>
                Hey voilà some projects I worked on. 
            </p>
            <p>Don't Hesite to reach out if you would like to know more.</p>
        </div>
    );

};

export default ProjectBanner;