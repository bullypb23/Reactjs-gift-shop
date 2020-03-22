import React from 'react';

import classes from './BasketItem.module.css';
import pillow from '../../../assets/pillow1.png';
import blanket from '../../../assets/blanket1.png';
import towel from '../../../assets/towel1.png';

const BasketItem = props => {
    return (
        <div className={classes.BasketItem}>
            <div className={classes.ImageBox}>
                {props.productName === 'Jastuk' ? <img src={pillow} alt="Proizvod" /> : null}
                {props.productName === 'Cebe' ? <img src={blanket} alt="Proizvod" /> : null}
                {props.productName === 'Peskir' ? <img src={towel} alt="Proizvod" /> : null}
            </div>
            <div className={classes.Information}>
                <h2>{props.productName}</h2>
                <p>Ime deteta: <span style={{fontWeight: 'bold'}}>{props.childName}</span></p>
                <p>Izabrana boja: <span style={{fontWeight: 'bold'}}>{props.color}</span></p>
                <p>Izabrani stiker: <span style={{fontWeight: 'bold'}}>{props.sticker}</span></p>
                {/* <p>Velicina: {props.size}</p> */}
            </div>
            <div className={classes.Price}>
                <div onClick={() => props.removeItem(props.id)}>
                    <i className="fas fa-trash-alt"></i>
                </div>
                <h2>{props.price} RSD</h2>
            </div>
        </div>
    );
}

export default BasketItem;