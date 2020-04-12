import styled from 'styled-components';

import { Link } from 'react-router-dom';



export const NavbarContainer = styled.div`
  width: 10vw;
  height: 100vh;
  padding: 12px;
  text-align: left;
  display: flex;
  flex-direction: column;
  .home-link {
    margin-bottom: 12px;
  }
  .cart-link {
    margin-bottom: 32px;
  }
  .pages-space{
    flex-grow: 1;
  }
`

export const LinkContainer = styled(Link)`
  display: block;
  margin-top: 24px;
  color: #ABABAB;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`;
