import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import classes from './Items.module.css';
import Item from '../../components/Item/Item';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';

class Items extends Component {
    state = {
        items: [],
        isLoaded: false, 
        error: null
    }

    UNSAFE_componentWillMount() {
        axios.get('https://gift-shop-bd491.firebaseio.com/products.json')
            .then(response => {
                const updatedItems = response.data;
                this.setState({
                    items: updatedItems,
                    isLoaded: true
                })
            }).catch(error => {
                this.setState({error: error})
            })
        }
        
        render() {
            let items = <Spinner />
            if (this.state.isLoaded) {
                items = Object.keys(this.state.items).map(key => {
                    return (
                            <Item
                                link={this.state.items[key].url} 
                                key={key}
                                name={key} 
                                source={this.state.items[key].source}
                                price={this.state.items[key].price}
                                {...this.props} />
                            )
                })
            }
            return (
                <div className={classes.Container}>
                    {items}
                </div>
            )
    }
}

export default withRouter(Items);