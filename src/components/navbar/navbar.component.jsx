import React from 'react';

import { NavbarContainer, LinkContainer } from './navbar.styles'

const Navbar = () => (
  <NavbarContainer >
    <LinkContainer to="/" className="home-link">
      HOME
    </LinkContainer>
    <LinkContainer to="/" className="cart-link">
      CART (0)
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
    <div className="pages-space"></div>
    <LinkContainer to="/info/faq" className="home-link">
      FAQ
    </LinkContainer>

  </NavbarContainer>
)

export default Navbar;
