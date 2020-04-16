import styled from 'styled-components';

export const SizingContainer = styled.div`
overflow: scroll;
height: 90vh;
img{
  width: 60%;
  margin: 16px;
  border 1px solid #ABABAB;;
}

@media only screen and (max-width: 768px) {
  img{
    width: 80%;
  }
}
`
