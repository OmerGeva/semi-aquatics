import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  padding: 42px 12px;
  .checkout-items{
    width: 80%;
    height: 80vh;
    overflow: scroll;
  }
  .items-and-total{
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    .checkout-items{
      margin: 0 auto;
      width: 95%;
      height: 80%;
      overflow: scroll;
    }
    .items-and-total{
      display: block;
      height: 70vh;
      align-items: center;
    }
  }
`
