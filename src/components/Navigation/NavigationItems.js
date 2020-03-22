import React from 'react';

import { withRouter } from 'react-router-dom';

import Logo from '../UI/Logo/Logo';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    return (
        <header className={classes.NavigationItems} style={{height: '100px'}}>
            <nav className={classes.Navbar}>
                <div className={classes.Divs1}> 
                    <Logo />
                </div>
                <div className={classes.Divs2}>
                    <ul>
                        {/* <NavigationItem link="prijava"><i className="fas fa-users"></i></NavigationItem> */}
                        <NavigationItem link="/"><i className="fas fa-home"></i></NavigationItem>
                        <NavigationItem link="kontakt"><i className="fas fa-address-book"></i></NavigationItem>
                        {props.addedItem ? <NavigationItem link="korpa"><i className="fas fa-shopping-basket"></i></NavigationItem> : null}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default withRouter(NavigationItems);