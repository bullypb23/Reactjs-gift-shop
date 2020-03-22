import React, { Component } from 'react';

import axios from 'axios';

import Input from '../../components/UI/Input/Input';
import classes from './OrderData.module.css';

class OrderData extends Component {
    state = {
        controls: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Ime'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Prezime'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Ulica i broj'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            place: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Mesto'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Postanski broj'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Telefon'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Vasa e-mail adresa'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
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

    submitHandler = (event) => {
        event.preventDefault();
        axios.post('https://gift-shop-bd491.firebaseio.com/orders.json', {
            name: this.state.controls.name.value,
            lastName: this.state.controls.lastName.value,
            street: this.state.controls.street.value,
            place: this.state.controls.place.value,
            zipCode: this.state.controls.zipCode.value,
            phone: this.state.controls.phone.value,
            email: this.state.controls.email.value,
            product: this.props.products
        }).then(response => {
            this.props.history.push('/')
        });
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
            <div className={classes.Parent}>
                <div className={classes.Login}>
                    <h2>Unesite vase podatke</h2>
                    {error}
                    <form onSubmit={this.submitHandler} style={{width: '100%'}}>
                        {form}
                        <button className={classes.Submit} disabled={!this.state.formIsValid}>Naruci</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default OrderData;