import styled, { css } from 'styled-components';

export const ButtonStyles = css`
  background-color: #ABABAB;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: #ABABAB;
    border: 1px solid #ABABAB;
  }
`
export const InvertedButtonStyles = css`
  background-color: white;
  color: #ABABAB;
  border: 1px solid #ABABAB;

  &:hover{
    background-color: #ABABAB;
    color: white;
    border:none;
  }
`;

export const CustomButtonContainer= styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  dipslay: flex;
  justify-content: center;

  ${ButtonStyles}
`;
