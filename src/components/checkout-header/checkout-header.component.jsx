import React from 'react';
import { CheckoutHeaderContainer } from './checkout-header.styles'

export const CheckoutHeader = () => (
  <CheckoutHeaderContainer>
    <div className="header-block">
      <span>
        Product
      </span>
    </div>
    <div className="header-block">
      <span>
        Description
      </span>
    </div>
    <div className="header-block">
      <span>
        Quantity
      </span>
    </div>
    <div className="header-block">
      <span>
        Price
      </span>
    </div>
    <div className="header-block">
      <span>
        Remove
      </span>
    </div>
  </CheckoutHeaderContainer>
  )

export default CheckoutHeader;
