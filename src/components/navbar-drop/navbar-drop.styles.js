import styled from 'styled-components';

import { Link } from 'react-router-dom';


export const NavbarDropContainter = styled.div`
.drop-title{
  cursor: pointer;
  font-size: 14px;
  &:hover{
    opacity: 0.7;
  }
}
`

export const LinkContainer = styled(Link)`
  overflow-x: visible;
  width: 110%;
  display: block;
  margin-top: 22px;
  color: #ABABAB;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  &:hover{
    opacity: 0.7;
  }

   @media only screen and (max-width: 768px)  {
    margin-top: 14px;
    font-weight: 500;
    font-size: 14px;
    .mobile-dropdown-drop{
      display: block;
    }

}

  @media only screen and (max-height: 668px) {
      font-size: 14px;
      .mobile-dropdown-drop{
      display: block;
      }
  }
    @media only screen and (max-height: 569px) {
      margin-top: 16px;
      font-size: 14px;
  }
`
