import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import InfoPage from './pages/info-page/info-page.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { AppContainer } from './app.styles.js'

class App extends React.Component {
  state = {
    dark: false
  }
  changeTheme = event => {
    this.setState({dark: !this.state.dark})
  }
  render(){
  return (
    <AppContainer isDark={this.state.dark}>
      <div className="App">
        <Navbar />
        <div className="right-side">
          <div className="page">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/info' component={InfoPage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route path='/checkout' component={CheckoutPage}/>
            </Switch>
          </div>
          <Footer changeTheme={this.changeTheme}/>
        </div>
      </div>
    </AppContainer>
  );
  }
}

export default App;
