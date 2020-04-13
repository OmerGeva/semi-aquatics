import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component'
import ShopPage from './pages/shop/shop.component'
import InfoPage from './pages/info-page/info-page.component'

const Home = () => (
  <div className="home-logo">
    <h2>[Reverse Evolution]</h2>
    <img src="https://cdn.shopify.com/s/files/1/0276/3305/7867/files/big3_1410x.png?v=1575617303" alt="logo"/>
  </div>
  )
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="right-side">
        <div className="page">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/info' component={InfoPage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/info' component={InfoPage}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
