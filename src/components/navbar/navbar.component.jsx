import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavbarContainer, LinkContainer } from './navbar.styles';

import NavbarDrop from '../navbar-drop/navbar-drop.component'
import useOnClickOutside from '../../effects/use-on-click-outside.effect'

import { toggleDarkTheme } from '../../redux/style/style.actions';

const Navbar = () =>
{
  const dispatch = useDispatch();

  const numberOfCartItems = useSelector(state => state.cart.cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0))
  const isDark = useSelector(state => state.style.isDark)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const ref = useRef();

  useOnClickOutside(ref, () => setNavbarOpen(false));


  const winterDrops19 = [1,2,3,4,5,6].reverse()
  const summerDrops20 = [7,8,10,11,12].reverse()
  const fallDrops20 = [13, 14].reverse()
  const spring2021 = [15, 16, 17, 18, 19].reverse()

  const navHeight  = window.innerHeight

  return(
    <NavbarContainer isDark={isDark} navHeight = {navHeight} ref={ref}>
      <div className="nav-desktop">
      <br/>
        <LinkContainer to="/" className="home-link">
        HOME
        </LinkContainer>
        <LinkContainer to="/checkout" className="cart-link">
        CART ({numberOfCartItems})
        </LinkContainer>
        <LinkContainer to="/shop/catalog">
        CATALOG
        </LinkContainer>
          <br/>
        <LinkContainer to="/shop/drops/21">
          SUMMER
        </LinkContainer>
        <div className="new-drop-top">
          NEW!
        </div>
          <br/>
        <LinkContainer to="/shop/drops/20">
          FALL 2021
        </LinkContainer>
        <br/>
        <NavbarDrop  title='SPRING/SUMMER 2021' drops={spring2021}/>

        <NavbarDrop  title='FALL/WINTER 2020/21' drops={fallDrops20}/>

        <NavbarDrop  title='SPRING/SUMMER 2020' drops={summerDrops20}/>

        <NavbarDrop  title='FALL/WINTER 2019/20' drops={winterDrops19}/>

        <div className="pages-space"></div>
        <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
        <label htmlFor="themeSwitch" className="theme-switch__label" onClick={() => dispatch(toggleDarkTheme())}>
          <span></span>
        </label>
      <br/>
        <LinkContainer to="/info/sizing">
        SIZING
        </LinkContainer>
        <LinkContainer to="/story">
      <br/>
        STORY
        </LinkContainer>
      <br/>
        <LinkContainer to="/info/sustainability">
        SUSTAINABILITY
        </LinkContainer>
      <br/>
        <LinkContainer to="/info/faq">
        FAQ
      </LinkContainer>
      <a href='https://markets.businessinsider.com/news/stocks/streetwear-startup-is-pioneering-the-slow-fashion-movement-1030160893' target='_blank' className='bi-link'>
      PRESS
      </a>

      </div>

    {
      // ----------------------- Mobile ----------------------------
    }
    <div className={navbarOpen ? "mobile-toggle-btn-open" : "mobile-toggle-btn-closed"} onClick={() => setNavbarOpen(!navbarOpen)}>
      <i className="fas fa-bars"></i>
    </div>
    <div className={navbarOpen ? "nav-mobile-open" : "nav-mobile-closed"}>
    <br/>
    <br/>
      <LinkContainer to="/" className="home-link"  onClick={() => setNavbarOpen(!navbarOpen)}>
      HOME
      </LinkContainer>
      <LinkContainer to="/checkout" className="cart-link" onClick={() => setNavbarOpen(!navbarOpen)}>
      CART ({numberOfCartItems})
      </LinkContainer>
      <LinkContainer to="/shop/catalog"  onClick={() => setNavbarOpen(!navbarOpen)}>
      CATALOG
      </LinkContainer>
        <br/>
      <LinkContainer to="/shop/drops/21" onClick={() => setNavbarOpen(!navbarOpen)}>
        SUMMER
      </LinkContainer>
        <div className="new-drop-top">
          NEW!
        </div>
        <br/>
      <LinkContainer to="/shop/drops/20" onClick={() => setNavbarOpen(!navbarOpen)}>
          FALL 2021
      </LinkContainer>
      <br/>
      <NavbarDrop  title='SPRING/SUMMER 2021' drops={spring2021} closeNavbar={() => setNavbarOpen(!navbarOpen)}/>
      <NavbarDrop  title='FALL/WINTER 2020/21' drops={fallDrops20} closeNavbar={() => setNavbarOpen(!navbarOpen)}/>

      <NavbarDrop  title='SPRING/SUMMER 2020' drops={summerDrops20} closeNavbar={() => setNavbarOpen(!navbarOpen)}/>

      <NavbarDrop  title='FALL/WINTER 2019/20' drops={winterDrops19} closeNavbar={() => setNavbarOpen(!navbarOpen)}/>

      <div className="pages-space"></div>
      <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
      <label htmlFor="themeSwitch" className="theme-switch__label" onClick={() => dispatch(toggleDarkTheme())}>
        <span></span>
      </label>
      <br/>
      <LinkContainer to="/info/sizing" className="non-drop-page" onClick={() => setNavbarOpen(!navbarOpen)}>
      SIZING
      </LinkContainer>
      <br/>
      <LinkContainer to="/story" className="non-drop-page" onClick={() => setNavbarOpen(!navbarOpen)}>
      STORY
      </LinkContainer>
      <br/>
      <LinkContainer to="/info/sustainability" className="non-drop-page" onClick={() => setNavbarOpen(!navbarOpen)}>
      SUSTAINABILITY
      </LinkContainer>

      <br/>
      <LinkContainer to="/info/faq" className="non-drop-page" onClick={() => setNavbarOpen(!navbarOpen)}>
      FAQ
      </LinkContainer>
      <br/>
      <a href='https://markets.businessinsider.com/news/stocks/streetwear-startup-is-pioneering-the-slow-fashion-movement-1030160893' target='_blank' className='bi-link'>
      PRESS
      </a>
      <a href="https://www.instagram.com/semiaquatics">
        <i className="fab fa-instagram footer-item" ></i>
      </a>
      <h6 className="footer-item copyright">© 2020 Semi Aquatics</h6>
    </div>


    </NavbarContainer>
    )
  }



export default Navbar;
