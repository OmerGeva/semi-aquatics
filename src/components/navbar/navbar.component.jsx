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
  </NavbarContainer>
)

export default Navbar;
