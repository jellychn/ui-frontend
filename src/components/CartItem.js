import React from 'react';
import { Link } from 'react-router-dom';


class CartItem extends React.Component {
    state = {
        quantity: parseInt(this.props.item.quantity)
    }

    plus = () => {
        const quantity = this.state.quantity + 1;
        this.setState({quantity: quantity});
        this.props.item.quantity = quantity;
        this.props.calculateTotal();
    }

    minus = () => {
        if (this.state.quantity > 1) {
            const quantity = this.state.quantity - 1;
            this.setState({quantity: quantity});
            this.props.item.quantity = quantity;
            this.props.calculateTotal();
        }
    }

    render () {
        return (
            <div key={this.props.index} className='list-item'>
                <Link to={`/item/${this.props.item.id}`} className='img-container'>
                    <img src={this.props.item.colors[this.props.item.color]} alt={this.props.index}/>
                </Link>
                <div className='item-info'>
                    <p>{this.props.item.name.toUpperCase()}</p>
                    <p>{`SIZE: ${this.props.item.size.toUpperCase()}`}</p>
                    <p>{`COLOR: ${this.props.item.color.toLocaleUpperCase()}`}</p>
                    <div className='quantity-container'>
                        <div className='remove' onClick={this.minus}/>
                        <p>{this.state.quantity}</p>
                        <div className='add' onClick={this.plus}/>
                        <p>{`X $${this.props.item.price}`}</p>
                    </div>
                    <button onClick={() => {this.props.removeItemFromCart(this.props.item)}}>REMOVE</button>
                </div>
            </div>
        )
    }
}

export default CartItem;