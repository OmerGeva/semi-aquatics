import styled, { css } from 'styled-components';

const shrinkLabel = css`
top: -14px;
font-size: 12px;
`

const LightStyles = css`
color: #ABABAB;
`

const DarkStyles = css`
color: white;
`

const getIsDark = ({isDark}) => {
  return isDark ? DarkStyles : LightStyles
}

export const HomeContainer = styled.div`
.home-page{
  padding: 32px;
  img{
    width: 50%;
    margin: auto;
  }


  @media only screen and (max-width: 768px) {
    h4{
      margin-top: 30vh;
    }
    margin-top: 36px;
    img{
     width: 90%;
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

    .submit-subscribe{
      margin-top: 16px;
    }
  }
}
}

// SUBMIT BUTTON FOR SUBSCRIBE
.group {
  position: relative;
  width: 20vw;

  .form-input {
    ${getIsDark}
    background: none;
    font-size: 14px;
    padding: 12px 12px 12px 5px;
    display: block;
    width: 80%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #ABABAB;
    font-family: 'VCR_OSD_MONO_1';

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      ${shrinkLabel}
    }
  }
  .form-input-label {
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 12px;
    transition: 300ms ease all;
    &.shrink {
      ${shrinkLabel}
    }
  }
}
.form-flex-box{
  margin-top: 16px;
  display: flex;
  justify-content: center;

  .submit-subscribe{
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

`
