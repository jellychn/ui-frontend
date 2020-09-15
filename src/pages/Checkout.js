import React from 'react';

class Checkout extends React.Component {
    componentDidMount () {
        window.scrollTo(0,0);
    }

    render () {
        return (
            <div id='checkout'>
                <form method='POST' className='order'>
                    <div className='order-details'>
                        <h1>SHIPPING</h1>
                        <p>CONTACT</p>
                        <input type='text' name='email' placeholder='EMAIL'/>
                        <input type='text' name='name' placeholder='FULL NAME'/>
                        <div className='input-align'>
                            <input type='text' name='number' placeholder='+ [ ]'/>
                            <input type='text' name='mobile' placeholder='MOBILE'/>
                        </div>
                        <p>ADDRESS</p>
                        <input type='text' name='street' placeholder='STREET'/>
                        <input type='text' name='appartment' placeholder='Appartment, UNIT, etc'/>
                        <select name='country'>
                            <option>-</option>
                            <option>NEW ZEALAND</option>
                        </select>
                        <input type='text' name='state' placeholder='State/Province/Region'/>
                        <input type='text' name='city' placeholder='City'/>
                        <input type='text' name='zipcode' placeholder='Zip Code'/>
                        <h1 style={{margin: '40px 0 10px 0'}}>PAYMENT</h1>
                        <p>CARD NUMBER</p>
                        <input type='text' placeholder='0000 0000 0000 0000'/>
                        <p>CARD HOLDER</p>
                        <input type='text' placeholder='NAME'/>
                        <p>EXPIRES</p>
                        <input type='text' placeholder='MM/YY'/>
                        <p>CVV</p>
                        <input type='text' placeholder='000'/>
                    </div>
        
                    <div className='summary'>
                        <p style={{fontSize:'15px', margin:'0px'}}>SUBTOTAL $150</p>
                        <p style={{fontSize:'15px', margin:'0px'}}>ESTIMATED DELIVERY $10</p>
                        <h2>TOTAL $160</h2>
                        <button className='place-order' style={{padding:'30px', marginTop:'40px'}}>PLACE ORDER</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Checkout;