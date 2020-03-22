import React from 'react';
import classes from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = props => {
    return (
        <div className={classes.Card}>
            <div className={classes.ImgBox}>
                <img src={props.source} alt={props.name} />
            </div>
            <div className={classes.Content}>
                <h2>{props.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa eligendi dolore officia, quas iusto, minima, ratione quaerat accusamus quidem eos tempora nisi corrupti vel iste cupiditate doloribus eum voluptatibus.</p>
                <p>Cena: <span>{props.price}</span> dinara</p>
                <Link className={classes.NavLink} to={props.link}>Pogledaj detalje</Link> 
            </div>
        </div>
    )
}

export default Item;