import React from 'react';
import { CheckoutHeaderContainer } from './checkout-header.styles'

export const CheckoutHeader = () => (
  <CheckoutHeaderContainer>
    <div className="header-block">
      <span>
        PRODUCT
      </span>
    </div>
    <div className="header-block">
      <span>
        ITEM
      </span>
    </div>
    <div className="header-block">
      <span>
        SIZE
      </span>
    </div>
    <div className="header-block">
      <span>
        QUANTITY
      </span>
    </div>
    <div className="header-block">
      <span>
        PRICE
      </span>
    </div>
    <div className="header-block">
      <span>
        REMOVE
      </span>
    </div>
  </CheckoutHeaderContainer>
  )

export default CheckoutHeader;
