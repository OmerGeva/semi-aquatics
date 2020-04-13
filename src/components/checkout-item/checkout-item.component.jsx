import React from 'react';
import { connect } from 'react-redux';

import { CheckoutItemContainer } from './checkout-item.styles';
import { removeItemFromCart } from '../../redux/cart/cart.actions'

export const CheckoutItem = ({item, removeItemFromCart}) => (
  <CheckoutItemContainer>
    <div className="image-container">
      <img src={item.images[0].src} alt={item.title}/>
    </div>
    <span className="name">{item.title}</span>
    {
      item.variants[0].title.length > 2 ?
      <span className="size"></span>
      :
      <span className="size">{item.variants[0].title}</span>
    }
    <span className="quantity">{item.quantity}</span>
    <span className="price">${item.variants[0].price * item.quantity}</span>
    <span className="remove-button" onClick={() => removeItemFromCart(item)}>𝗫</span>
  </CheckoutItemContainer>
)

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
