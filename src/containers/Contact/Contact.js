import React, { Component } from 'react';

import classes from './Contact.module.css';
import logo from '../../assets/logo.png';
import axios from 'axios';
import Input from '../../components/UI/Input/Input';

class Contact extends Component {
    state = {
        controls: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Ime*'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 2
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Vasa e-mail adresa*'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 2
                },
                valid: false,
                touched: false
            },
            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Naslov'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: true
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    placeholder: 'Vasa poruka*',
                    rows: 5,
                    columns: 30
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }, 
        error: null,
        formIsValid: false
    }

    onChangeHandler = (event, controlName) => {
        const updatedControls = {...this.state.controls};
        const updatedFormElement = {...this.state.controls[controlName]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedControls[controlName] = updatedFormElement;

        let formIsValid = true;
        for (let controlName in updatedControls) {
            formIsValid = updatedControls[controlName].valid && formIsValid;
        }

        this.setState({controls: updatedControls, formIsValid: formIsValid});
    }

    onFormSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('https://gift-shop-bd491.firebaseio.com/messages.json', {
            name: this.state.controls.name.value,
            email: this.state.controls.email.value,
            subject: this.state.controls.subject.value,
            message: this.state.controls.message.value
        }).then(response => {
            this.props.history.push('/');
        })
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (!rules) {
            return true
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }; 
    
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }; 
    
        return isValid;
    }

    render() {
        const formElementArray = [];
        for (let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let form = formElementArray.map(element => {
            return (<Input
                elementType={element.config.elementType}
                key={element.id}
                shouldValidate={element.config.validation}
                touched={element.config.touched}
                invalid={!element.config.valid}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                changed={(event) => this.onChangeHandler(event, element.id)} />)
        });

        let error = null;
        if (this.state.error) {
            error = <p style={{color: 'rgb(197, 77, 77)'}}>{this.state.error.message}</p>
        }

        return (
            <div className={classes.Contact}>
                <div className={classes.Banner}>
                    <h2>Kontaktirajte nas</h2>
                    <p>Ako imate neko pitanje, kritiku, pohvalu ili sugestiju pisite nam, zelimo da cujemo vase misljnje!</p>
                </div>
                <div className={classes.Wrapper}>
                    <div className={classes.Form}>
                        {error}
                        <form onSubmit={this.onFormSubmitHandler}>
                            {form}
                            <button className={classes.Submit} disabled={!this.state.formIsValid}>Posalji</button>
                        </form>
                    </div>
                    <div className={classes.ContactDetails}>
                        <div className={classes.Div1}>
                            <div>
                                <h2>Fabrika poklona</h2>
                            </div>
                            <div className={classes.Logo}>
                                <img src={logo} alt="Logo" />
                            </div>
                        </div>
                        <div className={classes.Div2}>
                            <div>
                                <p><i className="fas fa-at" style={{color: 'grey', marginRight: '5px'}}></i>fabrikapoklona@gmail.com</p>
                                <address>
                                    <i className="fas fa-map-pin" style={{color: 'red', marginRight: '5px'}}></i>Rtanjska 11, Zvezdara <br />
                                    11000 Beograd
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;