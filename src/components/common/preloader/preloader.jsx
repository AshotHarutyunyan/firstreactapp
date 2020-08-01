import React from 'react';
import preloader from "../../../assets/images/circle.svg";

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'green' } }>
        <img src={preloader} alt='' />
    </div>
}

export default Preloader;