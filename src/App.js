import React, { Component, Suspense } from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import NavigationItems from './components/Navigation/NavigationItems';
import HomePage from './hoc/HomePage';
import Product from './containers/Product/Product';
import Basket from './components/BasketPage/Basket/Basket';
import Footer from './components/Footer/Footer';
import Spinner from './components/UI/Spinner/Spinner';

import towel from './assets/towel.png';
import pillow from './assets/pillow.png';
import blanket from './assets/blanket.png';

const asyncContact = React.lazy(() => import('./containers/Contact/Contact'));

class App extends Component {
	state = {
		basket: [],
		isItemAdded: false,
		totalPrice: 0
	};
	
    buttonClickedHandler = (product) => {
		const updatedBasket = [...this.state.basket];
		updatedBasket.push({
			price: product.price,
			sticker: product.sticker,
			childName: product.childName,
			productName: product.productName,
			color: product.color
		})
        this.setState({
			basket: updatedBasket,
			isItemAdded: true,
		});
		this.setState(prevState => {
			return {
				totalPrice: prevState.totalPrice + Number(product.price)
			}
		});
		this.props.history.push('/korpa')
	}
	
	removeItem = (id) => {
		const updatedBasket = [...this.state.basket];
		const updatedBasketIDs = updatedBasket.filter((item, index) => {
			return index !== Number(id)
		});
		this.setState({
			basket: updatedBasketIDs
		});
		this.setState(prevState => {
			return {
				totalPrice: prevState.totalPrice - updatedBasket[id].price
			}
		});
		if (updatedBasketIDs.length === 0) {
			this.setState({isItemAdded: false});
			this.props.history.push('/')
		}
	}

	render() {
		return (
			<div className="App">
				<NavigationItems addedItem={this.state.isItemAdded} />
				<Switch>
					<Suspense fallback={<Spinner />}>
						<Route exact path='/' component={HomePage} />
						{/* <Route path='/prijava' component={Login} />	 */}
						{this.state.isItemAdded ? <Route path='/korpa' render={() => <Basket products={this.state.basket} removeItem={this.removeItem} totalPrice={this.state.totalPrice} />} /> : null}	
						<Route path='/peskir' render={() => <Product name='Peskir' price='1000' source={towel} buttonClick={this.buttonClickedHandler} />} />
						<Route path='/jastuk' render={() => <Product name='Jastuk' price='1000' source={pillow} buttonClick={this.buttonClickedHandler} />} />
						<Route path='/cebe' render={() => <Product name='Cebe' price='2000' source={blanket} buttonClick={this.buttonClickedHandler} />} />
						<Route path='/kontakt' component={asyncContact} />
						<Redirect to='/' />
					</Suspense>
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(App);
