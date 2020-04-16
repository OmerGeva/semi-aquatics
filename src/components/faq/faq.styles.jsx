import styled from 'styled-components';

export const FaqContainer = styled.div`

  overflow: scroll;
  margin: auto;
  width: 60%;
  height: 90vh;
  .faq-question{
    margin-top: 32px;
    font-weight: 900;
  }
  .faq-answer{
    padding: 16px;
    margin-bottom: 16px;
  }
    @media only screen and (max-width: 768px) {
      width: 100%;
}
`
