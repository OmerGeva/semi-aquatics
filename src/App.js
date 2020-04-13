import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component'
import Home from './pages/home/home.component'
import ShopPage from './pages/shop/shop.component'
import InfoPage from './pages/info-page/info-page.component'



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
