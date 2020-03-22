import React from 'react';

import logo from '../../../assets/logo.png';
import classes from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const Logo = props => {
    return (
        <div className={classes.Logo}>
            <NavLink to="/">
                <img src={logo} alt="Logo"/>
            </NavLink>
        </div>
    );
}

export default Logo;