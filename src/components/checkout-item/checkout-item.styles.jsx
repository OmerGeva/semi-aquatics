import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  display: flex;
  padding: 24px 0px;
  align-items: center;
  .image-container {
    width: 17.8%;
    padding-right: 10px;

    img {
      width: 80%;
    }
  }
  .size,
  .name,
  .quantity,
  .price {
    width: 17.8%;
  }

  .remove-button {
    padding-left: 5%;
    cursor: pointer;
  }
`
