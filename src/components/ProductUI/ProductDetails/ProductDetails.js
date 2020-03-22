import React from 'react';

import classes from './ProductDetails.module.css';
import Colors from './ProductDetail/Colors/Colors';
import Name from './ProductDetail/Name/Name';
import Sticker from './ProductDetail/Sticker/Sticker';
import Description from './ProductDetail/Description/Description';

const ProductDetails = props => {
    return (
        <div className={classes.ProductDetails}>
            <Colors colorClick={props.colorClick} selectedColor={props.selectedColor} />
            <Name changed={props.changed} />
            <Sticker stickerClick={props.stickerClick} />
            <Description />
        </div>
    )
}

export default ProductDetails;