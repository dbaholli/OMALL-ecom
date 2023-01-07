import React from 'react';
import './Backdrop.scss';

const Backdrop = (props) => {
    return (
        <div className='nav-backdrop' onClick={props.click}></div>
    )
}

export default Backdrop
