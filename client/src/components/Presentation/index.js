import React from 'react';
import FontAwesomeIcon  from '@fortawesome/react-fontawesome';



const Presentation = () => {
    return(
        <div>
            <h3>Who am I ?</h3>
            <FontAwesomeIcon icon='coffee'/>
            Popular gadgets come from vendors like:
            <FontAwesomeIcon icon={["fab", "apple"]}/>
            <FontAwesomeIcon icon={["fab", "microsoft"]}/>
            <FontAwesomeIcon icon={["fab", "google"]}/>
            <h3>Whith what ?</h3>
        </div>
    );
};

export default Presentation;