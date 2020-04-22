import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { NavbarContainer, LinkContainer } from './navbar.styles';
import { createStructuredSelector } from 'reselect';

import onClickOutside from "react-onclickoutside";

class  Navbar extends React.Component{
  state = {
    navbarOpen: false
  }
  handleClickOutside(){
    this.setState({
      navbarOpen: false
    })
  }
  toggleList(){
    this.setState(() => ({
      navbarOpen: !this.state.navbarOpen
    }))
  }

  render(){
    const {numberOfCartItems} = this.props
    return(
      <NavbarContainer >
        <div className="nav-desktop">
        <LinkContainer to="/" className="home-link">
        HOME
        </LinkContainer>
        <LinkContainer to="/checkout" className="cart-link">
        CART ({numberOfCartItems})
        </LinkContainer>
        <LinkContainer to="/shop/drops/6">
        DROP 6
        </LinkContainer>
        <LinkContainer to="/shop/drops/5">
        DROP 5
        </LinkContainer>
        <LinkContainer to="/shop/drops/4">
        DROP 4
        </LinkContainer>
        <LinkContainer to="/shop/drops/3">
        DROP 3
        </LinkContainer>
        <LinkContainer to="/shop/drops/2">
        DROP 2
        </LinkContainer>
        <LinkContainer to="/shop/drops/1">
        DROP 1
        </LinkContainer>
        <LinkContainer to="/shop/catalog">
        CATALOG
        </LinkContainer>
        <div className="pages-space"></div>
        <LinkContainer to="/info/sizing">
        SIZING
        </LinkContainer>
        <LinkContainer to="/info/faq">
        FAQ
        </LinkContainer>
      </div>

      {
        //////////////// MOBILE ////////////////
      }
      <div className={this.state.navbarOpen ? "mobile-toggle-btn-open" : "mobile-toggle-btn-closed"} onClick={() => this.toggleList()}>
        <i className="fas fa-bars"></i>
      </div>
      <div className={this.state.navbarOpen ? "nav-mobile-open" : "nav-mobile-closed"}>
        <LinkContainer to="/" className="home-link"  onClick={() => this.toggleList()}>
        HOME
        </LinkContainer>
        <LinkContainer to="/checkout" className="cart-link" onClick={() => this.toggleList()}>
        CART ({numberOfCartItems})
        </LinkContainer>
        <LinkContainer to="/shop/drops/6"  onClick={() => this.toggleList()}>
        DROP 6
        </LinkContainer>
        <LinkContainer to="/shop/drops/5"  onClick={() => this.toggleList()}>
        DROP 5
        </LinkContainer>
        <LinkContainer to="/shop/drops/4"  onClick={() => this.toggleList()}>
        DROP 4
        </LinkContainer>
        <LinkContainer to="/shop/drops/3"  onClick={() => this.toggleList()}>
        DROP 3
        </LinkContainer>
        <LinkContainer to="/shop/drops/2"  onClick={() => this.toggleList()}>
        DROP 2
        </LinkContainer>
        <LinkContainer to="/shop/drops/1"  onClick={() => this.toggleList()}>
        DROP 1
        </LinkContainer>
        <div className="pages-space"></div>
        <LinkContainer to="/info/sizing"  onClick={() => this.toggleList()}>
        SIZING
        </LinkContainer>
        <LinkContainer to="/info/faq"  onClick={() => this.toggleList()}>
        FAQ
        </LinkContainer>
        <a href="https://www.instagram.com/semiaquatics">
        <i className="fab fa-instagram footer-item" ></i>
        </a>
        <h6 className="footer-item">© 2020 Semi Aquatics</h6>
      </div>


      </NavbarContainer>
      )
  }
}

const mapStateToProps = createStructuredSelector({
  numberOfCartItems: selectCartItemCount
})
export default connect(mapStateToProps)(onClickOutside(Navbar));
