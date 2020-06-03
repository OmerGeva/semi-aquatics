import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';


const DarkStyles = css`

span {
   position: absolute;
   bottom: calc(100% + 10px);
   left: 32px;
   width: 100%;
 }
.theme-switch__input:checked ~ .theme-switch__label {
 span::after {
   transform: translate3d(0, 0, 0);
 }
}

`

const LightStyles = css`

span {
   position: absolute;
   bottom: calc(100% + 10px);
   left: 0;
   width: 100%;
 }
.theme-switch__input:checked ~ .theme-switch__label {
 span::after {
   transform: translate3d(32px, 0, 0);
 }
}
`

const DarkStylesBackground = css`
 @media only screen and (max-width: 768px) {
  .nav-mobile-open{
    background-color: #2D2D2D;
    }
}
`
const LightStylesBackground = css`
 @media only screen and (max-width: 768px) {
  .nav-mobile-open{
    background-color: white;
  }
}
`


const toggleMobileBackground = ({isDark}) => {
  return isDark ? DarkStylesBackground : LightStylesBackground
}

const toggleButtonStyles = ({isDark}) => {
  return isDark ? DarkStyles : LightStyles
}

const setNavHeight = ({navHeight}) => {
  return navHeight
}

export const NavbarContainer = styled.div`
  .new-drop{
    color: red;
    margin: 0;
  }
  .new-drop-top{
    color: red;
    margin: 0;
  }

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

  .summer-season{
      .summer-drops{
        display: none;
      }
      margin-top: 24px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      width: 90%;
      &:hover{
       .new-drop-top{
         display: none;
       }
      .summer-drops{
        display: block;
        width: 110%;
        padding-bottom: 20px;
        padding-left: 4px;
        margin-top: 6px;
        border-bottom: 1px solid;
      }
    }
  }
  .winter-season{
      .winter-drops{
        display: none;
      }
      margin-top: 24px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      width: 90%;
      &:hover{
      .winter-drops{
        display: block;
        width: 110%;
        padding-bottom: 20px;
        padding-left: 4px;
        margin-top: 6px;
        border-bottom: 1px solid;
      }
    }
  }
  * {
   box-sizing: border-box;
  }

  // Toggle switch
  .theme-switch__input,
  .theme-switch__label {
   position: absolute;
   bottom: 150px;
   left:15px;
   z-index: 1;
  }

  .theme-switch__input {
   display: none;
  }

  .theme-switch__label {
      &:hover{
        cursor: pointer;
      }
     padding: 12px;
     transition: background-color 200ms ease-in-out;
     width: 60px;
     height: 20px;
     text-align: center;
     border: 1px solid #ABABAB;

     span::after {
       position: absolute;
       top: calc(100% + 15px);
       left: 5px;
       width: 15px;
       height: 15px;
       content: '';
       background-color: #c9c9c9;
       transition: transform 200ms, background-color 200ms;
     }
   ${toggleButtonStyles}
    }
    ${toggleMobileBackground}
  }


@media only screen and(max-width: 768px) and (max-height: 668px) {
    margin: 0;
  .nav-mobile-open{
    font-weight: 500;
    font-size: 14px;  }
}
 @media only screen and (max-width: 768px) {

  .summer-season{
    .mobile-nav-titles{
      font-size: 14px;
    }
      .summer-drops{
        display: none;
      }
      margin-top: 24px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      &:hover{
      .summer-drops{
        display: block;
        width: 110%;
        padding-bottom: 20px;
        padding-left: 4px;
        margin-top: 6px;
        border-bottom: 1px solid rgba(0,0,0,0);
      }
    }
  }
  .winter-season{
    .mobile-nav-titles{
      font-size: 14px;
    }
      .winter-drops{
        display: none;
      }
      margin-top: 24px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      &:hover{
      .winter-drops{
        display: block;
        width: 110%;
        padding-bottom: 20px;
        padding-left: 4px;
        margin-top: 6px;
        border-bottom: 1px solid rgba(0,0,0,0);
      }
    }
  }
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
    h6{
      margin: 0;
    }
    left:60vw;
    width: 60vw;
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
    .new-drop{
      color: red;
      margin: 0;
    }
    h6{
      font-size: 12px;
      margin-top: 16px;;
    }
    .copyright{
      margin-bottom: 50px;
    }

    .non-drop-page{
      margin-top: 12px;
    }

     * {
      box-sizing: border-box;
     }

     // Toggle switch
     .theme-switch__input,
     .theme-switch__label {
      position: absolute;
      bottom: 240px;
      left:7px;
      z-index: 1;
     }

     .theme-switch__input {
      display: none;
     }

     .theme-switch__label {
      padding: 12px;
      transition: background-color 200ms ease-in-out;
      width: 60px;
      height: 20px;
      text-align: center;
      border: 1px solid #ABABAB;

      span::after {
        position: absolute;
        top: calc(100% + 15px);
        left: 5px;
        width: 15px;
        height: 15px;
        content: '';
        background-color: #c9c9c9;
        transition: transform 200ms, background-color 200ms;
      }
     }
     ${toggleButtonStyles}
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
  &:hover{
    opacity: 0.7;
  }

   @media only screen and (max-width: 768px)  {
    font-weight: 500;
    font-size: 14px;

}

  @media only screen and (max-height: 668px) {
      margin-top: 16px;
      font-size: 14px;
  }
    @media only screen and (max-height: 569px) {
      margin-top: 16px;
      font-size: 14px;
  }
`
