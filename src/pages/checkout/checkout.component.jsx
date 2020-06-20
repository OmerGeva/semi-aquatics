import React from 'react';
import { connect } from 'react-redux';

import { CheckoutContainer } from './checkout.styles';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CheckoutHeader from '../../components/checkout-header/checkout-header.component';
import CheckoutTotal from '../../components/checkout-total/checkout-total.component';
import { updateCheckoutAsync } from '../../redux/cart/cart.actions'

const CheckoutPage = ({cartItems, checkoutFinished, checkout, updateCart}) => {

  updateCart(checkout, cartItems);

  return(
    <CheckoutContainer>
      <CheckoutHeader />
      <div className="items-and-total">
        <div className="checkout-items">
          {
            cartItems.map(item =>
              <CheckoutItem item={item} key={item.id}/>
            )
          }
        </div>
        <CheckoutTotal />
      </div>
    </CheckoutContainer>
    )
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  checkout: state.cart.checkout
})

const mapDispatchToProps = dispatch =>({
  updateCart: (checkout) => dispatch(updateCheckoutAsync(checkout))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
