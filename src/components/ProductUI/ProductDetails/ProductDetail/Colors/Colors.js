import React from 'react';
import classes from './Colors.module.css';

const Colors = props => {
    return (
        <div className={classes.Colors}>
            <h2>Izaberite boju</h2>
            <div className={classes.Wrapper}>
                <div className={classes.Color} onClick={() => props.colorClick('bela')}></div>
                <div className={classes.Color} onClick={() => props.colorClick('crna')}></div>
                <div className={classes.Color} onClick={() => props.colorClick('crvena')}></div>
                <div className={classes.Color} onClick={() => props.colorClick('roze')}></div>
                <div className={classes.Color} onClick={() => props.colorClick('plava')}></div>
                <div className={classes.Color} onClick={() => props.colorClick('siva')}></div>
                <div className={classes.Color} onClick={() => props.colorClick('zuta')}></div>
                <div className={classes.Color} onClick={() => props.colorClick('braon')}></div>
            </div>
            <p>Izabrana boja: <span style={{fontWeight: 'bold'}}>{props.selectedColor}</span></p>
        </div>
    )
}

export default Colors;