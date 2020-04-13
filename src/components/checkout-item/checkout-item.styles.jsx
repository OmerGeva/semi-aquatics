import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  display: flex;
  padding: 24px 0px;
  align-items: center;
  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 60%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    padding-left: 20px;
  }

  .remove-button {
    padding-left: 8px;
    cursor: pointer;
  }
`
