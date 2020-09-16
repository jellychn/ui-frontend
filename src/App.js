import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { checkCartHasItems } from './actions/cartActions';
import { getItems, triggerGetItems } from './actions/filterActions';
import {
  Switch,
  Route
} from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
// import Notification from './components/Notification';
import Modal from './components/Modal';
import Search from './components/Search';

import Home from './pages/Home';
import Display from './pages/Display';
import Item from './pages/Item';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


class App extends React.Component {
  componentDidMount () {
    window.scrollTo(0,0);
    this.props.checkCartHasItems();
  }

  componentDidUpdate () {
    if (this.props.requestItems) {
      this.props.triggerGetItems(false);
      this.props.getItems();
    }
  }

  render () {
    return (
      <div className="App">
        <Header/>
        {/* <Notification/> */}
        <Search/>
        <Modal/>
        <div className='container'>
          <Switch>
            <Route path='/checkout'>
              <Checkout/>
            </Route>
            <Route path='/cart'>
              <Cart/>
            </Route>
            <Route path='/item/:id'>
              <Item/>
            </Route>
            <Route path='/display'>
              <Display/>
            </Route>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    requestItems: state.filter.requestItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkCartHasItems: () => dispatch(checkCartHasItems()),
    triggerGetItems: (bol) => dispatch(triggerGetItems(bol)),
    getItems: () => dispatch(getItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
