import styled, { css } from 'styled-components';

const descriptionStyles = css`
width: 87%;
top: -50vh;
top: -12vh;
width: 80vw;
`
const sizeStyles = css`
width: 90%;
top: -30vh;
left: 5vw;
width: 80vw;
`


const emailStyles = css`
top: -30vh;
height: 40vh;
left: 30vw;
top: 30vh;
color: black;
width: 40vw;
border-radius: 2px;

@media only screen and (max-width: 768px) {
  width: 80vw;
  left: 5vw;
  .email-modal{
    h2{
      font-size: 32px;
    }
    .no-thanks{
      padding: 0;
    }
  }
}


`


const hasDescription = ({description, type}) => (
  description ?
    descriptionStyles
  :
    type === 'email form' ?
      emailStyles
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
  max-height:85vh;
  box-shadow: 0 16px 128px rgba(2,2,2,0.2);
  overflow-y: scroll;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  ${hasDescription}

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
  .email-modal{
    text-align: center;
    display:flex;
    flex-direction: column;
    height: 90%;
    justify-content: space-around;
    h2{
      font-size: 52px;
    }
    .flex-grower{
      flex-grow: 1;
    }
    .no-thanks{
      cursor: pointer;

      padding: 5% 0;
      text-decoration: underline;
    }
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
