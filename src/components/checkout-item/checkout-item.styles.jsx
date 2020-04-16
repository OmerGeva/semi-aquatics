import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  .checkout-item-mobile{
    display: none;
  }
.checkout-item-desktop{
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
}

  @media only screen and (max-width: 768px) {
    .checkout-item-desktop{
      display: none;
    }
    .checkout-item-information-mobile{
      text-align: left;
      display: block;
        .size,
        .name,
        .quantity,
        .price {
          margin: 8px;
        }
        .size-and-quantity-mobile{
          display: flex;
          justify-content: space-between;
          padding: 4px;
        }
    }
    .checkout-item-mobile{
      width: 100%;
      display: flex;
      padding: 24px 0px;
      align-items: center;
      .image-container {
        width: 80%;
        padding-right: 10px;

        img {
          width: 80%;
        }
      }

      .remove-button {
        padding-left: 5%;
        cursor: pointer;

      }
    }
}
`
