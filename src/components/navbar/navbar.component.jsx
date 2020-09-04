import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { NavbarContainer, LinkContainer } from './navbar.styles';

import NavbarDrop from '../navbar-drop/navbar-drop.component'
import { selectIsDark } from '../../redux/style/style.selectors'
import { selectProducts } from '../../redux/product/product.selectors'
import useOnClickOutside from '../../effects/use-on-click-outside.effect'

import { toggleDarkTheme } from '../../redux/style/style.actions';

const Navbar = ({numberOfCartItems, toggleDarkTheme, isDark}) =>
{

  const [navbarOpen, setNavbarOpen] = useState(false)
  const ref = useRef();

  useOnClickOutside(ref, () => setNavbarOpen(false));


  const winterDrops19 = [1,2,3,4,5,6].reverse()
  const summerDrops20 = [7,8,10,11,12].reverse()

  const navHeight  = window.innerHeight

  return(
    <NavbarContainer isDark={isDark} navHeight = {navHeight} ref={ref}>
      <div className="nav-desktop">
        <LinkContainer to="/" className="home-link">
        HOME
        </LinkContainer>
        <LinkContainer to="/checkout" className="cart-link">
        CART ({numberOfCartItems})
        </LinkContainer>
        <LinkContainer to="/shop/catalog">
        CATALOG
        </LinkContainer>

        <NavbarDrop  title='SPRING/SUMMER 2020' drops={summerDrops20}/>

        <NavbarDrop  title='FALL/WINTER 2019/20' drops={winterDrops19}/>

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
    <div className={navbarOpen ? "mobile-toggle-btn-open" : "mobile-toggle-btn-closed"} onClick={() => setNavbarOpen(!navbarOpen)}>
      <i className="fas fa-bars"></i>
    </div>
    <div className={navbarOpen ? "nav-mobile-open" : "nav-mobile-closed"}>
      <LinkContainer to="/" className="home-link"  onClick={() => setNavbarOpen(!navbarOpen)}>
      HOME
      </LinkContainer>
      <LinkContainer to="/checkout" className="cart-link" onClick={() => setNavbarOpen(!navbarOpen)}>
      CART ({numberOfCartItems})
      </LinkContainer>
      <LinkContainer to="/shop/catalog"  onClick={() => setNavbarOpen(!navbarOpen)}>
      CATALOG
      </LinkContainer>



      <NavbarDrop  title='SPRING/SUMMER 2020' drops={summerDrops20} closeNavbar={() => setNavbarOpen(!navbarOpen)}/>

      <NavbarDrop  title='FALL/WINTER 2019/20' drops={winterDrops19} closeNavbar={() => setNavbarOpen(!navbarOpen)}/>

      <div className="pages-space"></div>
      <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
      <label htmlFor="themeSwitch" className="theme-switch__label" onClick={() => toggleDarkTheme()}>
        <span></span>
      </label>
      <LinkContainer to="/info/sizing" className="non-drop-page" onClick={() => setNavbarOpen(!navbarOpen)}>
      SIZING
      </LinkContainer>
      <LinkContainer to="/info/sustainability" className="non-drop-page" onClick={() => setNavbarOpen(!navbarOpen)}>
      SUSTAINABILITY
      </LinkContainer>
      <LinkContainer to="/info/faq" className="non-drop-page" onClick={() => setNavbarOpen(!navbarOpen)}>
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

const mapStateToProps = createStructuredSelector({
  numberOfCartItems: selectCartItemCount,
  isDark: selectIsDark,
  products: selectProducts
})
const mapDispatchToProps = dispatch => ({
  toggleDarkTheme: () => dispatch(toggleDarkTheme())
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
