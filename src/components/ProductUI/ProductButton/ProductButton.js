import React from 'react';
import classes from './ProductButton.module.css';

const ProductButton = props => {
    return (
        <div className={classes.ProductButton}>
            <button onClick={props.buttonClick}>Dodaj u korpu</button>
        </div>
    )
}

export default ProductButton;