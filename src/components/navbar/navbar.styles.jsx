import styled from 'styled-components';

import { Link } from 'react-router-dom';



export const NavbarContainer = styled.div`

  .nav-desktop{
    width: 10vw;
  height: 95vh;
  padding: 16px;
  display: flex;
  text-align: left;
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
  }
  .nav-mobile-open{
    display: none;
  }
  .nav-mobile-closed{
    display: none;
  }
  .mobile-toggle-btn-open{
    display: none;
  }
  .mobile-toggle-btn-closed{
    display: none;
  }
 }


 @media only screen and (max-width: 768px) {
    z-index: 10;
    position: fixed;
    height: 100vh;
    border-right: 1px solid gray;
    padding: 0px;
    .nav-desktop{
      display: none;
    }
  .mobile-toggle-btn-open{
    z-index: 11;
    padding-left: 16px;
    display: block;
    font-size: 24px;
    position: absolute;
    top: 3%;
    left: 70%;
  }
  .mobile-toggle-btn-closed{
    z-index: 11;
    padding-left: 16px;
    display: block;
    font-size: 24px;
    position: absolute;
    top: 3%;
    left: 5%;
  }
  .nav-mobile-closed{
    left: 0;

    display: none;
  }
  .nav-mobile-open{
    left:50vw;
    background-color: white;
    width: 50vw;
    height: 100vh;
    padding: 8px;
    text-align: left;
    display: flex;
    justify-content: flex-end;
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
    i{
      font-size: 24px;
      margin-top: 8px;;
    }
    h6{
      font-size: 12px;

      margin-top: 16px;;
    }
  }

`

export const LinkContainer = styled(Link)`
  display: block;
  margin-top: 24px;
  color: #ABABAB;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

   @media only screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 18px;

}
`
