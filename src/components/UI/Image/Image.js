import React from 'react';

import classes from './Image.module.css';

const Image = props => {
    return (
        <div className={classes.Image}>
            <img src={props.source} alt="Product"/>
        </div>
    )
}

export default Image;