import React from 'react';
import { connect } from 'react-redux';

import { CheckoutItemContainer } from './checkout-item.styles';
import { removeItemFromCartAsync } from '../../redux/cart/cart.actions'

export const CheckoutItem = ({item, removeItemFromCart, checkout}) => (
  <CheckoutItemContainer>
    <div className="image-container">
      {
        item.images ?
      <img src={item.images[0].src} alt={item.title}/>
        :
      <img src={item.image.src} alt={item.title}/>
      }
    </div>
    <span className="name">{item.productName}</span>
    {
      item.title.length > 2 ?
      <span className="size"></span>
      :
      <span className="size">{item.title}</span>
    }
    <span className="quantity">{item.quantity}</span>

    <span className="price">${item.price * item.quantity}</span>
    <span className="remove-button" onClick={() => removeItemFromCart(item, checkout)}>𝗫</span>
  </CheckoutItemContainer>
)

const mapStateToProps = state => ({
  checkout: state.cart.checkout
})
const mapDispatchToProps = dispatch => ({
  removeItemFromCart: (item, checkout) => dispatch(removeItemFromCartAsync(item, checkout))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
