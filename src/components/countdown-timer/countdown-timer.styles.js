import styled from 'styled-components';

export const CountdownTimerContainer = styled.div`
margin: auto;
display: flex;
width: 60%;
justify-content: space-around;
h5{
  font-size: 32px;
  padding: 50px;
  border: 1px solid #ABABAB;
}
@media only screen and (max-width: 768px)  {
  width: 80%;
  h5{
    width: 18px;
    font-size: 18px;
    padding: 24px;
    border: 1px solid #ABABAB;
  }
 }
`
