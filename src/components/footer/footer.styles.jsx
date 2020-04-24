import styled, { css } from 'styled-components';

const DarkStyles = css`
span {
   position: absolute;
   bottom: calc(100% + 10px);
   left: 60px;
   width: 100%;
 }

 .theme-switch__label {
    background-color: #ABABAB;

  &::before {
    color: #ABABAB;
  }

  &::after {
    color: turquoise;
  }
.theme-switch__input:checked ~ .theme-switch__label {
   background-color: #ABABAB;

 &::before {
   color: orange;
 }

 &::after {
   color: #ABABAB;
 }

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
 .theme-switch__label {
    background-color: #ABABAB;

  &::before {
   color: orange;
  }

  &::after {
   color: #ABABAB;
  }
.theme-switch__input:checked ~ .theme-switch__label {
   background-color: #ABABAB;

 &::before {
    color: #ABABAB;
 }

 &::after {
    color: turquoise;
 }

 span::after {
   transform: translate3d(60px, 0, 0);
 }
}
`


const toggleButtonStyles = ({isDark}) => {
  return isDark ? DarkStyles : LightStyles
}

export const FooterContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-end;
 width: 90vw;
 height: 10vh;
 text-align: right;
 padding: 12px;

 h4{
  margin-right: 5%;
 }
 i{
  font-size: 24px;
  margin-right: 24px;

  &:hover{
    color: #999999;
  }
 }
 .mail-us-footer{
  margin-right: 2%;
 }

 * {
  box-sizing: border-box;
 }

 // Toggle switch
 .theme-switch__input,
 .theme-switch__label {
  position: absolute;
  bottom: 10px;
  z-index: 1;
  right: 80vw;
 }

 .theme-switch__input {
  display: none;
 }

 .theme-switch__label {
  padding: 15px;
  transition: background-color 200ms ease-in-out;
  width: 90px;
  height: 20px;
  border-radius: 50px;
  text-align: center;
  background-color: #ABABAB;
  box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0.4);

  &::before,
  &::after {
    font-size: 2rem;
    position: absolute;
    transform: translate3d(0, -50%, 0);
    top: 50%;
  }

  &::before {
    content: '\\263C';
    right: 100%;
    margin-right: 10px;
  }

  &::after {
    content: '\\263E';
    left: 100%;
    margin-left: 10px;
  }



  span::after {
    position: absolute;
    top: calc(100% + 15px);
    left: 5px;
    width: 20px;
    height: 20px;
    content: '';
    border-radius: 50%;
    background-color: #c9c9c9;
    transition: transform 200ms, background-color 200ms;
    box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.4);
  }
 }

 // Checked label styles

  ${toggleButtonStyles}

 @media only screen and (max-width: 768px) {
     display: none;

   }
`
