import styled from 'styled-components';

import { Link } from 'react-router-dom';


export const NavbarDropContainter = styled.div`
margin-bottom: 1rem;

.new-drop{
  color: red;
  margin: 0;
}
.individual-drops{

}
.open{
  padding-bottom: 8px;
  border-bottom: 1px solid white;
}
.drop-title{
  margin-top: 0;
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
  margin-bottom: 0;
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
