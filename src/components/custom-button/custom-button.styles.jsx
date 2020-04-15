import styled, { css } from 'styled-components';

export const ButtonStyles = css`
  font-family: 'VCR_OSD_MONO_1';
  background-color: white;
  color: #ABABAB;
  border: 1px solid #ABABAB;

  &:hover {
    opacity: 0.7;
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
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'VCR_OSD_MONO_1';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${ButtonStyles}
`;
