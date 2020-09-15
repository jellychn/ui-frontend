import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { checkCartHasItems } from './actions/cartActions';
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
    checkCartHasItems();
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

const mapDispatchToProps = (dispatch) => {
  return {
    checkCartHasItems: () => dispatch(checkCartHasItems())
  }
}

export default connect(null, mapDispatchToProps)(App);
