import React from 'react';
import { withRouter } from 'react-router-dom';

class Checkout extends React.Component {
    state = {
        subtotal: 0,
        total: 0,
        delivery: 10,

        email: '',
        name: '',
        mobileCode: '',
        mobile: '',
        street: '',
        appartment: '',
        country: '',
        state: '',
        city: '',
        zipcode: '',

        cardNumber: '',
        cardName: '',
        expires: '',
        cvv: '',

        emailErr: false,
        nameErr: false,
        mobileCodeErr: false,
        mobileErr: false,
        streetErr: false,
        appartmentErr: false,
        countryErr: false,
        stateErr: false,
        cityErr: false,
        zipcodeErr: false,

        cardNumberErr: false,
        cardNameErr: false,
        expiresErr: false,
        cvvErr: false
    }

    componentDidMount () {
        window.scrollTo(0,0);
        this.calculateTotal();
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    calculateTotal = () => {
        let subtotal = 0;
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        this.setState({data: cart});
        for (let i=0;i<cart.length;i++) {
            subtotal += cart[i].price * cart[i].quantity;
        }

        this.setState({total: subtotal + this.state.delivery, subtotal: subtotal});
    }

    validate = (e) => {
        e.preventDefault();
        let valid = true;
        this.setState({
            emailErr: false,
            nameErr: false,
            mobileCodeErr: false,
            mobileErr: false,
            streetErr: false,
            appartmentErr: false,
            countryErr: false,
            stateErr: false,
            cityErr: false,
            zipcodeErr: false,
    
            cardNumberErr: false,
            cardNameErr: false,
            expiresErr: false,
            cvvErr: false
        });
        if (this.state.email.length === 0) {
            this.setState({emailErr: true});
            valid = false;
        } 
        if (this.state.name.length === 0) {
            this.setState({nameErr: true});
            valid = false;
        } 
        if (this.state.mobileCode.length === 0) {
            this.setState({mobileCodeErr: true});
            valid = false;
        } 
        if (this.state.mobile.length === 0) {
            this.setState({mobileErr: true});
            valid = false;
        } 
        if (this.state.street.length === 0) {
            this.setState({streetErr: true});
            valid = false;
        } 
        if (this.state.country.length === 0) {
            this.setState({countryErr: true});
            valid = false;
        } 
        if (this.state.appartment.length === 0) {
            this.setState({appartmentErr: true});
            valid = false;
        } 
        if (this.state.state.length === 0) {
            this.setState({stateErr: true});
            valid = false;
        } 
        if (this.state.city.length === 0) {
            this.setState({cityErr: true});
            valid = false;
        }
        if (this.state.zipcode.length === 0) {
            this.setState({zipcodeErr: true});
            valid = false;
        } 
        if (this.state.cardNumber.length === 0) {
            this.setState({cardNumberErr: true});
            valid = false;
        }
        if (this.state.cardName.length === 0) {
            this.setState({cardNameErr: true});
            valid = false;
        } 
        if (this.state.expires.length === 0) {
            this.setState({expiresErr: true});
            valid = false;
        } 
        if (this.state.cvv.length === 0) {
            this.setState({cvvErr: true});
            valid = false;
        }

        if (valid) {
            this.props.history.push('/display');
            window.localStorage.setItem('cart', JSON.stringify([]));
        }
    }

    render () {
        return (
            <div id='checkout'>
                <form className='order'>
                    <div className='order-details'>
                        <h1>SHIPPING</h1>
                        <p>CONTACT</p>
                        <input type='text' name='email' placeholder='EMAIL' value={this.state.email} onChange={(e) => {this.onChange(e)}} style={{border: this.state.emailErr ? '3px solid #facfcf':'3px solid white'}}/>
                        <input type='text' name='name' placeholder='FULL NAME' value={this.state.name} onChange={(e) => {this.onChange(e)}} style={{border: this.state.nameErr ? '3px solid #facfcf':'3px solid white'}}/>
                        <div className='input-align'>
                            <input type='text' name='mobileCode' placeholder='+ [ ]' value={this.state.mobileCode} onChange={(e) => {this.onChange(e)}} style={{border: this.state.mobileCodeErr ? '3px solid #facfcf':'3px solid white'}}/>
                            <input type='text' name='mobile' placeholder='MOBILE' value={this.state.mobile} onChange={(e) => {this.onChange(e)}} style={{border: this.state.mobileErr ? '3px solid #facfcf':'3px solid white'}}/>
                        </div>
                        <p>ADDRESS</p>
                        <input type='text' name='street' placeholder='STREET' value={this.state.street} onChange={(e) => {this.onChange(e)}} style={{border: this.state.streetErr ? '3px solid #facfcf':'3px solid white'}}/>
                        <input type='text' name='appartment' placeholder='Appartment, UNIT, etc' value={this.state.appartment} onChange={(e) => {this.onChange(e)}} style={{border: this.state.appartmentErr ? '3px solid #facfcf':'3px solid white'}}/>
                        <select name='country' onChange={(e) => {this.onChange(e)}} style={{border: this.state.countryErr ? '3px solid #facfcf':'3px solid white'}}>
                            <option>-</option>
                            <option>NEW ZEALAND</option>
                        </select>
                        <input type='text' name='state' placeholder='State/Province/Region' value={this.state.state} onChange={(e) => {this.onChange(e)}} style={{border: this.state.stateErr ? '3px solid #facfcf':'3px solid white'}}/>
                        <input type='text' name='city' placeholder='City' value={this.state.city} onChange={(e) => {this.onChange(e)}} style={{border: this.state.cityErr ? '3px solid #facfcf':'3px solid white'}}/>
                        <input type='text' name='zipcode' placeholder='Zip Code' value={this.state.zipcode} onChange={(e) => {this.onChange(e)}} style={{border: this.state.zipcodeErr ? '3px solid #facfcf':'3px solid white'}}/>
                        <h1 style={{margin: '40px 0 10px 0'}}>PAYMENT</h1>
                        <p>CARD NUMBER</p>
                        <input name='cardNumber' type='text' placeholder='0000 0000 0000 0000' value={this.state.cardNumber} onChange={(e) => {this.onChange(e)}} style={{border: this.state.cardNameErr ? '3px solid #facfcf':'3px solid white'}}/>
                        <p>CARD HOLDER</p>
                        <input name='cardName' type='text' placeholder='NAME' value={this.state.cardName} onChange={(e) => {this.onChange(e)}} style={{border: this.state.cardNameErr ? '3px solid #facfcf':'3px solid white'}}/>
                        <p>EXPIRES</p>
                        <input name='expires' type='text' placeholder='MM/YY' value={this.state.expires} onChange={(e) => {this.onChange(e)}} style={{border: this.state.expiresErr ? '3px solid #facfcf':'3px solid white'}}/>
                        <p>CVV</p>
                        <input name='cvv' type='text' placeholder='000' value={this.state.cvv} onChange={(e) => {this.onChange(e)}} style={{border: this.state.cvvErr ? '3px solid #facfcf':'3px solid white'}}/>
                    </div>
        
                    <div className='summary'>
                        <p style={{fontSize:'15px', margin:'0px'}}>{`SUBTOTAL $${this.state.subtotal}`}</p>
                        <p style={{fontSize:'15px', margin:'0px'}}>ESTIMATED DELIVERY $10</p>
                        <h2>{`TOTAL $${this.state.total}`}</h2>
                        <button className='place-order' style={{padding:'30px', marginTop:'40px'}} onClick={(e) => {this.validate(e)}}>PLACE ORDER</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Checkout);