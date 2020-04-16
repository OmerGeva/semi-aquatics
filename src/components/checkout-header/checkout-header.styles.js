import styled from 'styled-components';

export const CheckoutHeaderContainer = styled.div`
  width: 80%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  height: 10%;

  .header-block {
    text-transform: capitalize;
    width: 16%;

    &:last-child {
      width: 8%;
    }
  }
  .header-block-mobile{
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px 0;
    width: 100%;
    font-size: 18px;
    .header-block {
      display: none;
    }
    .header-block-mobile{
      display: block;
    }
  }

`
