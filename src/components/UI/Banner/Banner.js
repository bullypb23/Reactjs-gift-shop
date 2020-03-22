import React from 'react';

import classes from './Banner.module.css';
import Image from '../Image/Image';

import pillow from '../../../assets/example.png';
import towel from '../../../assets/example1.png';

const Banner = props => {
    return (
        <div className={classes.Banner}>
            <div>
                <h2>Napravite personalizovane poklone za najmladje</h2>
                <p>Izaberite nesto iz nase ponude, izaberite boju, upisite ime deteta i izaberite poseban motiv i mi cemo Vasu ideju sprovesti u delo!</p>
            </div>
            <div className={classes.Images}>
                <Image source={pillow} />
                <Image source={towel} />
            </div>
        </div>
    )
}

export default Banner;