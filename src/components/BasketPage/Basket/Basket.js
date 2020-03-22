import React, { Component } from 'react';

import classes from './Basket.module.css';
import { Link, Redirect, withRouter } from 'react-router-dom';
import BasketItem from '../BasketItem/BasketItem';
import OrderData from '../../../containers/OrderData/OrderData';

class Basket extends Component {
    state = {
        purchasing: false
    }

    orderHandler = () => {
        this.setState(prevState => {
            return {
                purchasing: !prevState.purchasing
            }
        })
    }

    render() {
        
        const productsArray = Object.keys(this.props.products);
                    
        let items = null;
        if (productsArray.length !== 0) {
            items = productsArray.map(index => {
                return (
                    <BasketItem 
                        id={index}
                        key={index}
                        childName={this.props.products[index].childName}
                        price={this.props.products[index].price}
                        color={this.props.products[index].color}
                        sticker={this.props.products[index].sticker}
                        productName={this.props.products[index].productName}
                        removeItem={this.props.removeItem} />
                )
            });
        } else {
            items = <Redirect to="/" />
            // this.props.history.push('/')
        }

        return (
            <div className={classes.Basket}>
                <div className={classes.Header}>
                    <h2>Vasa korpa</h2>
                    <Link to='/'>Nastavite sa kupovinom  <i className="fas fa-chevron-right"></i></Link>
                </div>
                <div className={classes.Items}>
                    {items}
                </div>
                <div className={classes.Order}>
                    <div>
                        <p>Ukupna cena je <span>{this.props.totalPrice}</span> RSD</p>
                    </div>
                    <div>
                        <button onClick={this.orderHandler}>Sledeci korak</button>
                    </div>
                </div>
                <div className={classes.Contact}>
                    {this.state.purchasing ? <OrderData {...this.props} /> : null}
                </div>
            </div>
        );
    }
}

export default withRouter(Basket);