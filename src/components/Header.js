import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import logo_icon from '../assets/icons/logo.svg';
import menu_icon from '../assets/icons/menu.svg';
import menu_focus_icon from '../assets/icons/menu-focus.svg';
import search_icon from '../assets/icons/search.svg';
import cart_icon from '../assets/icons/cart.svg';
// import profile_icon from '../assets/icons/profile.png';

import { toggleDisplayMenu, closeDisplayMenu } from '../actions/headerActions';
import { resetFilter } from '../actions/filterActions';
import { checkCartHasItems } from '../actions/cartActions';
import { closeModal } from '../actions/modalActions';
import { openSearch } from '../actions/searchActions';

class Header extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.checkDisplayPage();
            this.props.checkCartHasItems();
        }
    }

    checkDisplayPage = () => {
        if (window.location.pathname.split('/')[1] === 'display') {
            return <div className='logo' style={{backgroundImage: this.props.displayMenu ? `url(${menu_focus_icon})`:`url(${menu_icon})`, display: this.props.search ? 'none':'block'}} onClick={this.props.toggleDisplayMenu}/>
        }
    }

    checkCheckoutPage = () => {
        if (window.location.pathname.split('/')[1] !== 'checkout') {
            return (
                <div className='logo-container'>
                    <div className='logo' style={{backgroundImage:`url(${search_icon})`, display: this.props.search ? 'none':'block'}} onClick={() => {this.props.closeDisplayMenu();this.props.closeModal();this.props.openSearch()}}/>
                    <Link to='/cart'>
                        <div style={{position: 'relative', display: this.props.search ? 'none':'block'}}>
                            <div className='cart-indicator' style={{display: this.props.cartHasItems ? 'block':'none'}}/>
                            <div className='logo' style={{backgroundImage:`url(${cart_icon})`}} onClick={() => {this.props.closeDisplayMenu(); this.props.resetFilter();this.props.closeModal()}}/>
                        </div>
                    </Link>
                    {/* <div className='logo' style={{backgroundImage:`url(${profile_icon})`}}/> */}
                </div>
            )
        }
    }

    render () {
        return (
            <div id='header'>
                <Link to='/'>
                    <div className='logo' style={{backgroundImage:`url(${logo_icon})`, display: this.props.search ? 'none':'block'}} onClick={() => {this.props.closeDisplayMenu();this.props.closeModal()}}/>
                </Link>
                {this.checkDisplayPage()}
                {this.checkCheckoutPage()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        displayMenu: state.header.displayMenu,
        cartHasItems: state.cart.hasItems,
        search: state.search.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDisplayMenu: () => dispatch(toggleDisplayMenu()),
        closeDisplayMenu: () => dispatch(closeDisplayMenu()),
        resetFilter: () => dispatch(resetFilter()),
        checkCartHasItems: () => dispatch(checkCartHasItems()),
        closeModal: () => dispatch(closeModal()),
        openSearch: () => dispatch(openSearch())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));