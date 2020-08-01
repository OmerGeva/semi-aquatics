import styled, { css } from 'styled-components';

const descriptionStyles = css`
width: 87%;
top: -50vh;
`
const sizeStyles = css`
width: 90%;
top: -30vh;
`
const hasDescription = (description) => (
  description ?
    descriptionStyles
  :
    sizeStyles
)
export const ModalContainer = styled.div`
  margin: 70px auto;
  padding: 20px;
  padding-top:0;
  background: #fff;
  border-radius: 5px;
  position: relative;
  z-index:3;
  max-height:85vh;
  box-shadow: 0 16px 128px rgba(2,2,2,0.2);
  overflow-y: scroll;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  left: -42vw;

  top: -12vh;
  position: absolute;
  h3{
    color: black;
  }

  img{
    width: 90%;
  }
  .modal-description{
    color: #2D2D2D;
    justify-content: flex-start;
    text-align: left;
  }


  @media only screen and (max-width: 768px) {
    min-height: 25vh;
    left: 1.5%;
    ${hasDescription};
    img{
      width: 110%;
    }

  }

`
