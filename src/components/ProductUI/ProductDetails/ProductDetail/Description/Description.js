import React from 'react';
import classes from './Description.module.css';

const Description = props => {
    return (
        <div className={classes.Description}>
            <h2>Opis proizvoda</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsam voluptas iure eos laudantium officia eveniet accusamus porro dolorem laborum. Similique maiores maxime atque, at facere odit sint quod eaque.</p>
        </div>
    )
};

export default Description;