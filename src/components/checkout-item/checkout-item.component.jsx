import React from 'react';

import { CheckoutItemContainer } from './checkout-item.styles';

export const CheckoutItem = ({item}) => (
  <CheckoutItemContainer>
    <div className="image-container">
      <img src={item.images[0].src} alt={item.title}/>
    </div>
    <span className="name">{item.title}</span>
    <span className="quantity">{item.quantity}</span>
    <span className="price">${item.variants[0].price * item.quantity}</span>
    <span className="remove-button">𝗫</span>
  </CheckoutItemContainer>
)

export default CheckoutItem;
