import styled from 'styled-components';



export const HomeContainer = styled.div`
.home-page{

  padding: 32px;
  .title-RE{
    display: flex;
    justify-content: center;
    align-content: middle;
    .bracket{
      font-size: 30px;
    }
    letter-spacing: .4rem;
    margin-bottom: 42px;
  }
  h4{
    margin-top: 0;
    margin-bottom: 5vh;
  }
  img{
    margin-bottom: 0;
    width: 45%;
    margin: auto;
    transform-origin: 45% 43%;
    animation: spin 50s linear infinite;
    transform: spin 50s linear infinite;
    -ms-transform: spin 50s linear infinite;
    -webkit-animation: spin 50s linear infinite;
      @keyframes spin {
        to {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spinning {
        to {
          0%{
            transform: rotate(360deg);
                      -ms-transform: rotate(360deg);
                      -webkit-transform: rotate(360deg);
          }
          25%{
            transform: rotate(360deg);
                      -ms-transform: rotate(360deg);
                      -webkit-transform: rotate(360deg);
          }
          50%{
            transform: rotate(360deg);
                      -ms-transform: rotate(360deg);
                      -webkit-transform: rotate(360deg);
          }
          75%{
            transform: rotate(360deg);
                      -ms-transform: rotate(360deg);
                      -webkit-transform: rotate(360deg);
          }
          100%{
            transform: rotate(360deg);
                      -ms-transform: rotate(360deg);
                      -webkit-transform: rotate(360deg);
          }

        }
      }
    }


  @media only screen and (max-width: 768px) {
    padding: 0;
    margin-top: 15vh;
    .title-RE{
      .bracket{
        font-size: 26px;
      }
      letter-spacing: .2rem;
      font-size: 22px;
    }
    h4{
      margin-top: 5vh;
    }
    img{
     padding-right: 12px;
     margin-top: 62px;
     width: 100vw;
     margin-bottom: 24px;
   }
   .form-flex-box{
    display: block;
    .group{
      width: 60%;
      margin: auto;
    }
    .form-input {
      margin-bottom: 16px;
      width 100%;
    }

    .submit-subscribe-button{
      background-color: white;
      height: 38px;
      letter-spacing: 0.5px;
      padding: 0 24px 0 24px;
      font-size: 15px;
      text-transform: uppercase;
      font-family: 'VCR_OSD_MONO_1';
      font-weight: bolder;
      font-family: 'VCR_OSD_MONO_1';
      color: #ABABAB;
      border: 1px solid #ABABAB;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
}


`
