import React from 'react';

import { NavbarContainer, LinkContainer } from './navbar.styles'

const Navbar = () => (
  <NavbarContainer >
    <LinkContainer to="/">
      Home
    </LinkContainer>
    <LinkContainer to="/shop/drops/6">
      Drop 6
    </LinkContainer>
    <LinkContainer to="/shop/drops/5">
      Drop 5
    </LinkContainer>
    <LinkContainer to="/shop/drops/4">
      Drop 4
    </LinkContainer>
    <LinkContainer to="/shop/drops/3">
      Drop 3
    </LinkContainer>
    <LinkContainer to="/shop/drops/2">
      Drop 2
    </LinkContainer>
    <LinkContainer to="/shop/drops/1">
      Drop 1
    </LinkContainer>

  </NavbarContainer>
)

export default Navbar;
