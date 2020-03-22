import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = props => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.Info}>
                <h2>Fabrika poklona</h2>
                <div>
                    <Link to='/'>Pocetna</Link>
                    <Link to='/utisci'>Utisci</Link>
                    <Link to='/kontakt'>Kontakt</Link>
                </div>
            </div>
            <div className={classes.Social}>
                <h2>Drustvene mreze</h2>
                <div>
                    <div>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;