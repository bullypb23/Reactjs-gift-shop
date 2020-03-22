import React from 'react';

import classes from './ProductBanner.module.css';

const ProductBanner = props => (
    <div className={classes.Banner}>
        <h2>{props.name}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam fugiat debitis sit eveniet assumenda at ullam non sint ea! Officia sunt consequuntur neque autem ex suscipit quae pariatur qui rerum!</p>
    </div>
)

export default ProductBanner;