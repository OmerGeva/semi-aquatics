import styled, { css } from 'styled-components';

const descriptionStyles = css`
width: 87%;
top: -50vh;
top: -12vh;
width: 80vw;

`
const sizeStyles = css`
width: 90%;
top: -10vh;
left: -50vw;
width: 80vw;

`



const emailStyles = css`
top: -30vh;
min-height: 40vh;
left: 30vw;
top: 25vh;
color: black;
width: 40vw;
border-radius: 2px;

@media only screen and (max-width: 768px) {
  height: 60vh;
  width: 80vw;
  left: 5vw;
  top: 10vh;
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

const emailMobile = css`
top: 10vh;
`
const notEmailMobile = css`
top: -55vh;
`

const isEmailForm = ({type}) => (
  type === 'email form' ?
  emailMobile
  :
  notEmailMobile
  )

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
    @media only screen and (max-width: 768px) {
      h2{
        font-size: 38px;

      }
    }
  }


  @media only screen and (max-width: 768px) {

    width: 85vw;
    left: 1.5vw;
    ${isEmailForm}
    min-height: 25vh;
    img{
      width: 110%;
    }


  }

`
