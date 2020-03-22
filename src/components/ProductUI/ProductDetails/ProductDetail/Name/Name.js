import React from 'react';

import Input from '../../../../UI/Input/Input';
import classes from './Name.module.css';

const Name = props => (
    <div className={classes.Name}>
        <h2>Ime deteta</h2>
        <Input 
            elementType='input' 
            elementConfig={{type: 'text', placeholder: 'Unesite ime deteta'}}
            changed={props.changed} />
    </div>
);

export default Name;