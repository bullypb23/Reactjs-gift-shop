import React from 'react';

import classes from './Sticker.module.css';
import lion from '../../../../../assets/lion-cub1.png';
import mini from '../../../../../assets/mini-mouse.png';
import superman from '../../../../../assets/superman.png';
import panda from '../../../../../assets/panda.png';
import crown from '../../../../../assets/crown.png';
import teddy from '../../../../../assets/teddy.png';
import ball from '../../../../../assets/ball.png';
import kitty from '../../../../../assets/hello-kitty.png';

const Sticker = props => (
    <div className={classes.Sticker}>
        <h2>Izaberite motiv</h2>
        <div className={classes.Wrapper}>
            <img src={lion} alt="Lavic" onClick={() => props.stickerClick('lion')} />
            <img src={mini} alt="Mini Maus" onClick={() => props.stickerClick('mini maus')} />
            <img src={superman} alt="Superman" onClick={() => props.stickerClick('superman')} />
            <img src={panda} alt="Panda" onClick={() => props.stickerClick('panda')} />
            <img src={crown} alt="Kruna" onClick={() => props.stickerClick('kruna')} />
            <img src={teddy} alt="Meda" onClick={() => props.stickerClick('meda')} />
            <img src={ball} alt="Lopta" onClick={() => props.stickerClick('lopta')} />
            <img src={kitty} alt="Lopta" onClick={() => props.stickerClick('hello kitty')} />
        </div>
    </div>
)

export default Sticker;