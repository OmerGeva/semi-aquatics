import styled from 'styled-components';

export const CatalogContainer = styled.div`
.drop-page {
  text-align: center;
  padding: 16px;
  overflow: scroll;
  height: 85vh;
  h2{
    margin-top: 2%;
  }
  .drop-title{
    height: 15%;
    margin-bottom: 2%;
  }
  .drop-products {
    display: grid;
    grid-gap: 1rem;

    // display: flex;
    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
      margin-right: 1vh;
      height: 100vh;
      width: 100%;
      padding-right: 8px;
    }
}

`
