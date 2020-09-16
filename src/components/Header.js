import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import logo_icon from '../assets/icons/logo.svg';
import menu_icon from '../assets/icons/menu.svg';
import menu_focus_icon from '../assets/icons/menu-focus.svg';
import search_icon from '../assets/icons/search.svg';
import cart_icon from '../assets/icons/cart.svg';
import display_icon from '../assets/icons/display.svg';
// import profile_icon from '../assets/icons/profile.png';

import { toggleDisplayMenu, closeDisplayMenu } from '../actions/headerActions';
import { resetFilter } from '../actions/filterActions';
import { checkCartHasItems } from '../actions/cartActions';
import { closeModal } from '../actions/modalActions';
import { openSearch, updateQ } from '../actions/searchActions';
import { triggerGetItems } from '../actions/filterActions';

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
        } else {
            if (window.location.pathname.split('/')[1] !== '' && window.location.pathname.split('/')[1] !== 'checkout') {
                return <Link to='/display'><div className='logo' style={{backgroundImage: `url(${display_icon})`, display: this.props.search ? 'none':'block'}} onClick={this.props.resetFilter}/></Link>
            }
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
                            <div className='logo' style={{backgroundImage:`url(${cart_icon})`}} onClick={() => {this.props.closeDisplayMenu();this.props.closeModal();this.props.updateQ('');this.props.resetFilter()}}/>
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
                    <div className='logo' style={{backgroundImage:`url(${logo_icon})`, display: this.props.search ? 'none':'block'}} onClick={() => {this.props.closeDisplayMenu();this.props.closeModal();this.props.updateQ('');this.props.resetFilter()}}/>
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
        openSearch: () => dispatch(openSearch()),
        updateQ: (q) => dispatch(updateQ(q)),
        triggerGetItems: (bol) => dispatch(triggerGetItems(bol))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));