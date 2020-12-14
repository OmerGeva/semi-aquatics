import styled, {css} from 'styled-components';


export const LightStyles = css`
color: #ABABAB;
background-color: white;
a{
  color: #ABABAB;
  text-decoration: none;
}
`

export const DarkStyles = css`
color: white;
background-color: #2D2D2D;
a{
  color: white;
  text-decoration: none;
}
`
const isDarkStyles = ({isDark}) => {
  return isDark ? DarkStyles: LightStyles;
}
export const AppContainer = styled.div`
.modal-backdrop{
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  background-color: rgba(0,0,0,0.4);

}
.App {
  font-family: 'VCR_OSD_MONO_1';
  text-align: center;
  display: flex;
  height: 100vh;
  overflow: hidden;
  ${isDarkStyles}
  @media only screen and (max-width: 768px) {
    overflow: scroll;
  }
}

.right-side {
  overflow: hidden;
  width: 90vw;
  @media only screen and (max-width: 768px) {
    overflow-y: scroll;
  }
}
.page {
  height: 90vh;
}


@media only screen and (max-width: 768px) {
  .right-side {
    z-index: 2;
    height: 100vh;
    width: 100vw;
  }
  .page {
  height: 100vh;
  width: 100vw;
  }
}

`
