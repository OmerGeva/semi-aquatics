import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import InfoPage from './pages/info-page/info-page.component';
import StoryPage from './pages/story/story.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { AppContainer } from './app.styles.js'
import Modal from './components/modal/modal.component'
import { updateCheckoutAsync } from './redux/cart/cart.actions'
import { resetApp } from './redux/root-reducer'

import { closeModal } from './redux/style/style.actions'
import AnnouncementBanner from './components/announcement-banner/announcement-banner.component'

const App = () =>
  {
    const dispatch = useDispatch();
    const isDark = useSelector(state => state.style.isDark)
    const modalOpen = useSelector(state => state.style.modalOpen)
    const checkout = useSelector(state => state.cart.checkout)
    const cartItems = useSelector(state => state.cart.cartItems)
    dispatch(updateCheckoutAsync(checkout, cartItems));
    
      // This checks when the user last was on the app, and resets the cached state.
    if(checkout && new Date(checkout.createdAt) < new Date("2021/6/15 10:00:00 EST")){
      dispatch(resetApp());
    }
    
    const closeModalRedux = () => {
      dispatch(closeModal());
    }

    return(
      <AppContainer isDark={isDark}>
        {
          modalOpen ?
          <Modal closeEmailModal={closeModalRedux} type={'email form'}/>
          :
          ''
        }
        {
          modalOpen ?
          <div className='modal-backdrop'> </div>
          :
          ''
        }
        <div className="App">
          <AnnouncementBanner />
          <Navbar />
          <div className="right-side">
            <div className="page">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/info' component={InfoPage}/>
                <Route path='/story' component={StoryPage}/>
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

export default App;
