import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component'
import Drop from './components/drop/drop.component'
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="right-side">
        <div className="page">
          <Switch>
            <Route path='/shop' component={ShopPage}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
