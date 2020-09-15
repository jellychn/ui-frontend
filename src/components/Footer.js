import React from 'react';
import instagram_icon from '../assets/icons/instagram.svg';
import twitter_icon from '../assets/icons/twitter.svg';
import pinterest_icon from '../assets/icons/pinterest.svg';
import facebook_icon from '../assets/icons/facebook.svg';

class Footer extends React.Component {
    checkCheckoutPage = () => {
        if (window.location.pathname.split('/')[1] !== 'checkout') {
            return (
                <React.Fragment>
                    <div className='icon' style={{backgroundImage: `url(${instagram_icon})`}}/>
                    <div className='icon' style={{backgroundImage: `url(${twitter_icon})`}}/>
                    <div className='icon' style={{backgroundImage: `url(${pinterest_icon})`}}/>
                    <div className='icon' style={{backgroundImage: `url(${facebook_icon})`}}/>
                </React.Fragment>
            )
        }
    }
    render () {
        return (
            <div id='footer'>
                {this.checkCheckoutPage()}
                <h3>UILINE_</h3>
            </div>
        )
    }
}

export default Footer;