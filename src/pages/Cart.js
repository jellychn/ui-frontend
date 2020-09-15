import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartItem from '../components/CartItem';
import { checkCartHasItems } from '../actions/cartActions';

class Cart extends React.Component {
    state = {
        data: JSON.parse(window.localStorage.getItem('cart')),
        subtotal: 0,
        total: 0,
        delivery: 10
    }

    componentDidMount () {
        window.scrollTo(0,0);
        this.calculateTotal();
    }

    calculateTotal = () => {
        let subtotal = 0;
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        this.setState({data: cart});
        for (let i=0;i<this.state.data.length;i++) {
            subtotal += this.state.data[i].price * this.state.data[i].quantity;
        }

        this.setState({total: subtotal + this.state.delivery, subtotal: subtotal});
        window.localStorage.setItem('cart', JSON.stringify(this.state.data));
    }

    removeItemFromCart = (item) => {
        let cart = this.state.data;
        for (let i=0;i<cart.length;i++) {
            if (cart[i]._id === item._id && cart[i].color === item.color && cart[i].name === item.name) {
                cart.splice(cart.indexOf(item), 1);
                this.setState({data: cart});
                window.localStorage.setItem('cart', JSON.stringify(cart));
                this.props.checkCartHasItems();
                this.calculateTotal();
            }
        }
    }

    render () {
        const cartItems = this.state.data.map((item, index) => {
            return (
                <CartItem index={index} item={item} calculateTotal={this.calculateTotal} removeItemFromCart={this.removeItemFromCart}/>
            )
        });

        if (this.state.data.length > 0) {
            return (
                <div id='cart'>
                    <div className='cart-items'>
                        {cartItems}
                    </div>
                    <div className='checkout-container'>
                        <p>{`SUBTOTAL $${this.state.subtotal}`}</p>
                        <p>{`ESTIMATED DELIVERY $${this.state.delivery}`}</p>
                        <h1>{`TOTAL $${this.state.total}`}</h1>
                        <Link to='/checkout'>
                            <button>CHECKOUT</button>
                        </Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div id='cart'>
                    <div className='cart-items'>
                        <p>YOU HAVE NO ITEMS IN YOUR CART</p>
                        <Link to='/display'>
                            <button>SHOP</button>
                        </Link>
                    </div>
                    <div className='checkout-container'>
                        <p>{`SUBTOTAL $${this.state.subtotal}`}</p>
                        <p>{`ESTIMATED DELIVERY $${this.state.delivery}`}</p>
                        <h1>{`TOTAL $${this.state.total}`}</h1>
                        <Link to='/checkout'>
                            <button>CHECKOUT</button>
                        </Link>
                    </div>
                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkCartHasItems: () => dispatch(checkCartHasItems())
    }
}

export default connect(null, mapDispatchToProps)(Cart);