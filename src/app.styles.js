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
   if (isDark){
    return DarkStyles;
   }
    return LightStyles;
}
export const AppContainer = styled.div`
.App {
  font-family: 'VCR_OSD_MONO_1';
  text-align: center;
  display: flex;
  height: 100vh;
  overflow: hidden;
  ${isDarkStyles}
}

.right-side {
  overflow: hidden;
  width: 90vw;

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
  padding-top: 10%;
  height: 100vh;
  width: 100vw;
  }
}

`
