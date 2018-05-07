import React from 'react';

const SingleProjectDescription = (props) => {
    let bgColor = props.bgColor
    let projectStyles = {
        backgroundColor: bgColor
    };
    let showButton = props.showButton
    return(
        <div className="project-description text-center" style={projectStyles}> 
            <img src={props.img} alt={props.alt} className="project-desc-image"/>
            <h2>{props.projectTitle}</h2>
            <p className="brief-description"> {props.briefDescription} </p>
            <p className="description">{props.description} </p>
            {/* this button shows only if  the value of the show props in not null or undefined */}
            {showButton.length !== 0 &&
                 <a className="btn btn-lg project-btn" target="_blank" rel="noopener noreferrer"
                 href="https://univ-erp.herokuapp.com/">
                 View on {props.hostname}
                 </a>
            }
        </div>
    );
};

export default SingleProjectDescription;