import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import InfoPage from './pages/info-page/info-page.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { AppContainer } from './app.styles.js'

import { updateCheckoutAsync } from './redux/cart/cart.actions'
import AnnouncementBanner from './components/announcement-banner/announcement-banner.component'

const App = ({ isDark, checkout, updateCart, cartItems }) =>
  {
    updateCart(checkout, cartItems);
    return(
      <AppContainer isDark={isDark}>
        <div className="App">
          <AnnouncementBanner />
          <Navbar />
          <div className="right-side">
            <div className="page">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/info' component={InfoPage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/checkout' component={CheckoutPage}/>
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </AppContainer>
      )
  }


const mapStateToProps = state => ({
  isDark: state.style.isDark,
  checkout: state.cart.checkout,
  cartItems: state.cart.cartItems
})

const mapDispatchToProps = dispatch => ({
  updateCart: (checkout) => dispatch(updateCheckoutAsync(checkout))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
