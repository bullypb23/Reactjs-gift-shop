import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import classes from './Login.module.css';
import axios from 'axios';

class Login extends Component {
    state = {
        controls: {
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
                valid: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Unesite lozinku'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false
            }
        },
        // isAuthenticated: false,
        isSignup: false,
        error: null
    }

    onChangeHandler = (event, controlName) => {
        const updatedControls = {...this.state.controls};
        const updatedFormElement = {...this.state.controls[controlName]};
        updatedFormElement.value = event.target.value;
        updatedControls[controlName] = updatedFormElement;
        this.setState({controls: updatedControls});
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup}
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCufhsqMSqAWB2XtqjqE1e143aHx9WLxhw';
        if (this.state.isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCufhsqMSqAWB2XtqjqE1e143aHx9WLxhw';
        }
        const email = this.state.controls.email.value;
        const password = this.state.controls.password.value;
        const data = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        axios.post(url, data).then(response => {
            console.log(response)
            this.props.history.push('/')
        }).catch(error => {
            this.setState({error: error})
        })
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
                key={element.id}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                changed={(event) => this.onChangeHandler(event, element.id)} />)
        })
        let error = null;
        if (this.state.error) {
            error = <p style={{color: 'rgb(197, 77, 77)'}}>{this.state.error.message}</p>
        }
        return (
            <div className={classes.Parent}> 
                <div className={classes.Login}>
                    {error}
                    <form onSubmit={this.submitHandler} style={{width: '100%'}}>
                        {form}
                        <button className={classes.Submit}>Submit</button>
                    </form>
                    <button
                        onClick={this.switchAuthModeHandler} 
                        className={classes.Button}>SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</button>
                </div>
            </div>
        );
    }
}

export default Login;