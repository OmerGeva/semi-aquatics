import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { NavbarContainer, LinkContainer } from './navbar.styles';

import { selectIsDark } from '../../redux/style/style.selectors'

import onClickOutside from "react-onclickoutside"
import { toggleDarkTheme } from '../../redux/style/style.actions';

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
    const navHeight  = window.innerHeight
    const {numberOfCartItems, toggleDarkTheme, isDark} = this.props
    return(
      <NavbarContainer isDark={isDark} navHeight = {navHeight}>
        <div className="nav-desktop">
          <LinkContainer to="/" className="home-link">
          HOME
          </LinkContainer>
          <LinkContainer to="/checkout" className="cart-link">
          CART ({numberOfCartItems})
          </LinkContainer>
          <LinkContainer to="/shop/drops/8">
          SPRING/SUMMER 2
          </LinkContainer>
          <LinkContainer to="/shop/drops/7">
          SPRING/SUMMER 1
          </LinkContainer>
            <LinkContainer to="/shop/drops/6">
          FALL/WINTER 6
          </LinkContainer>
          <LinkContainer to="/shop/drops/5">
          FALL/WINTER 5
          </LinkContainer>
          <LinkContainer to="/shop/drops/4">
          FALL/WINTER 4
          </LinkContainer>
          <LinkContainer to="/shop/drops/3">
          FALL/WINTER 3
          </LinkContainer>
          <LinkContainer to="/shop/drops/2">
          FALL/WINTER 2
          </LinkContainer>
          <LinkContainer to="/shop/drops/1">
          FALL/WINTER 1
          </LinkContainer>
          <LinkContainer to="/shop/catalog">
          CATALOG
          </LinkContainer>
          <div className="pages-space"></div>
          <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
          <label htmlFor="themeSwitch" className="theme-switch__label" onClick={() => toggleDarkTheme()}>
            <span></span>
          </label>
          <LinkContainer to="/info/sizing">
          SIZING
          </LinkContainer>
          <LinkContainer to="/info/sustainability">
          SUSTAINABILITY
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
        <LinkContainer to="/shop/drops/8"  onClick={() => this.toggleList()}>
        SPRING/SUMMER 2
        </LinkContainer>
        <LinkContainer to="/shop/drops/7"  onClick={() => this.toggleList()}>
        SPRING/SUMMER 1
        </LinkContainer>
        <LinkContainer to="/shop/drops/6"  onClick={() => this.toggleList()}>
        FALL/WINTER 6
        </LinkContainer>
        <LinkContainer to="/shop/drops/5"  onClick={() => this.toggleList()}>
        FALL/WINTER 5
        </LinkContainer>
        <LinkContainer to="/shop/drops/4"  onClick={() => this.toggleList()}>
        FALL/WINTER 4
        </LinkContainer>
        <LinkContainer to="/shop/drops/3"  onClick={() => this.toggleList()}>
        FALL/WINTER 3
        </LinkContainer>
        <LinkContainer to="/shop/drops/2"  onClick={() => this.toggleList()}>
        FALL/WINTER 2
        </LinkContainer>
        <LinkContainer to="/shop/drops/1"  onClick={() => this.toggleList()}>
        FALL/WINTER 1
        </LinkContainer>
        <LinkContainer to="/shop/catalog"  onClick={() => this.toggleList()}>
        CATALOG
        </LinkContainer>
        <div className="pages-space"></div>
        <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
        <label htmlFor="themeSwitch" className="theme-switch__label" onClick={() => toggleDarkTheme()}>
          <span></span>
        </label>
        <LinkContainer to="/info/sizing" className="non-drop-page" onClick={() => this.toggleList()}>
        SIZING
        </LinkContainer>
        <LinkContainer to="/info/sustainability" className="non-drop-page" onClick={() => this.toggleList()}>
        SUSTAINABILITY
        </LinkContainer>
        <LinkContainer to="/info/faq" className="non-drop-page" onClick={() => this.toggleList()}>
        FAQ
        </LinkContainer>
        <a href="https://www.instagram.com/semiaquatics">
          <i className="fab fa-instagram footer-item" ></i>
        </a>
        <h6 className="footer-item copyright">© 2020 Semi Aquatics</h6>
      </div>


      </NavbarContainer>
      )
  }
}

const mapStateToProps = createStructuredSelector({
  numberOfCartItems: selectCartItemCount,
  isDark: selectIsDark
})
const mapDispatchToProps = dispatch => ({
  toggleDarkTheme: () => dispatch(toggleDarkTheme())
})
export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(Navbar));
