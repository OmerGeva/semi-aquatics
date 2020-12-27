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
left: 35vw;
top: 20vh;
color: black;
width: calc(20vw + 30vh);
border-radius: 2px;
background-color: #F7F9F9;

`

const emailMobile = css`
top: 10vh;
width: 96vw;
padding: 0;
.email-modal{
  h2{
    font-size: 36px;
    margin-bottom: 12px;
  }
  width: 95%;
  .email-form{
    margin-bottom: 2rem;
  }
  
}
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

  .modal-description{
    color: #2D2D2D;
    justify-content: flex-start;
    text-align: left;
  }
  .email-modal{
    font-family: 'Lato', sans-serif;
    width: 100%;
    height: 100%;
    padding: 8px;
    display: flex;
    color: black;
    position: relative;
    border-radius: 3px;
    .exit-container{
      position: absolute;
      right: 0rem;
      top:.5rem;
        .exit-icon{
          cursor: pointer;
          
          font-size: 2.5rem;
          margin-left: auto;
        }
      }
      h2{
        font-size: 52px;
        letter-spacing: -2px;
      }
      p{
        font-size: 18px;
        margin: 8px 0;
      }

        flex-direction: column;
        .flex-grower{
          flex-grow: 1;
        }
        .email-form{
          font-family: 'Helvetica_Neue', sans-serif;
          width: 100%;
          margin: auto;
          margin-top: 1.5rem;
          border: none;
          border: 3px solid black;
          background-color: black;
          display: flex;
          height: 2.5rem;
          .email-input{
            width: 70%;
            padding: 4px;
            font-size: 18px;
            background-color: #F7F9F9;
            border: none;
            &:focus{
              outline: none;
            }
          }
          .submit-button{
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            max-height: 2.5rem;
            width: 30%;
            cursor: pointer;
            &:hover{
              opacity: 0.8;
            }
            background-color: black;
            .right-arrow{
              padding: 0;
              font-size: 18px;
              color: #F7F9F9;
            }
          }
        }
      

    }
    @media only screen and (max-width: 768px) {

        h2{
          font-size: 14px;
        }
        .exit-container{
          .exit-icon{
            position: absolute;
            right: .5rem;
            top: .5rem;
            margin-left: auto;
          }
        }
          
          width: 100%;
          overflow: hidden;
          display: block;
          
          padding: 0;
          p{
            font-size: 14px;
          }
          .email-form{
            margin: 16px auto;
          }
    }
  }


  @media only screen and (max-width: 768px) {

    width: 85vw;
    left: 1.5vw;
    ${isEmailForm}
    min-height: 20vh;
    img{
      width: 110%;
    }


  }

`
