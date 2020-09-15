import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import config from '../config';
import { checkCartHasItems } from '../actions/cartActions';
import { openModal} from '../actions/modalActions';

class Item extends React.Component {
    state = {
        color: '-',
        colorError: false,
        size: '-',
        sizeError: false,
        quantity: 1,
        item: {},
        featched: false
    }

    componentDidMount () {
        this.getItem();
    }

    getItem = () => {
        axios.get(config.url + `/item/${window.location.pathname.split('/')[2]}`).then(res => {
            this.setState({item: res.data, featched: true});
        }).catch(err => console.log(err));
    }

    validate = () => {
        this.setState({colorError: false, sizeError: false});
        if (this.state.color === '-') {
            this.setState({colorError: true});
        }

        if (this.state.size === '-') {
            this.setState({sizeError: true});
        }
    }

    addToCart = () => {
        this.validate();
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        let inCart = false;
        for (let i=0;i<cart.length;i++) {
            if (this.state.item._id === cart[i]._id && this.state.color.toUpperCase() === cart[i].color.toUpperCase() && cart[i].size.toUpperCase() === this.state.size.toLocaleUpperCase()) {
                if (cart[i].quantity < this.state.quantity) {
                    cart[i].quantity = this.state.quantity;
                }
                inCart = true;
            }
        }

        const item = {
            id: this.state.item.id,
            name: this.state.item.name,
            category: this.state.item.category,
            images: this.state.item.images,
            price: this.state.item.price,
            colors: this.state.item.colors,
            gender: this.state.item.gender,
            size: this.state.size,
            color: this.state.color.toLocaleLowerCase(),
            quantity: this.state.quantity
        }
        if (this.state.color !== '-' && this.state.size !== '-') {    
            if (inCart === false) {
                cart.push(item);
            }
    
            window.localStorage.setItem('cart', JSON.stringify(cart));
            this.props.checkCartHasItems();
            this.props.openModal(item, 'ITEM ADDED TO CART');
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render () {
        if (this.state.featched) {
            const itemImages = this.state.item.images.map((img, index) => {
                return <div key={index} className='img-wrapper'><img src={img} alt={index}/></div>
            });
    
            const colors = Object.keys(this.state.item.colors).map((col, index) => {
                return <option key={index}>{col.toUpperCase()}</option>
            });
    
            const sizes = this.state.item.sizes.map((size, index) => {
                return <option key={index}>{size.toUpperCase()}</option>
            });
    
            return (
                <div id='item'>
                    <div className='left-content'>
                        <div className='img-container'>
                            {itemImages}
                        </div>
                    </div>
                    <div className='right-content'>
                        <h2 style={{fontSize: '15px'}}>{this.state.item.category.toUpperCase()}</h2>
                        <h2>{`$${this.state.item.price}`}</h2>
                        <h2>{this.state.item.name.toUpperCase()}</h2>
                        <h3>COLOR</h3>
                        <select name='color' style={{border: this.state.colorError ? '2px solid #facfcf':'2px solid white'}} onChange={(e) => {this.onChange(e)}}>
                            <option>-</option>
                            {colors}
                        </select>
                        <h3>SIZE</h3>
                        <select name='size' style={{border: this.state.sizeError ? '2px solid #facfcf':'2px solid white'}} onChange={(e) => {this.onChange(e)}}>
                            <option>-</option>
                            {sizes}
                        </select>
                        <div className='add-container'>
                            <button className='add-button' style={{backgroundColor: 'white'}} onClick={this.addToCart}>ADD</button>
                            <select name='quantity' style={{width: 'auto'}} onChange={(e) => {this.onChange(e)}}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        {/* <button>FAVORITE</button> */}
                    </div>
                </div>
            )
        } else {
            return <div className='loading'><div className='loader'></div></div>
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkCartHasItems: () => dispatch(checkCartHasItems()),
        openModal: (item, type) => dispatch(openModal(item, type))
    }
}

export default connect(null, mapDispatchToProps)(Item);