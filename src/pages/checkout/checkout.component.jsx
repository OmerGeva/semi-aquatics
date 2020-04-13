import React from 'react';
import { connect } from 'react-redux';

import { CheckoutContainer } from './checkout.styles';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CheckoutHeader from '../../components/checkout-header/checkout-header.component';

const CheckoutPage = ({cartItems}) => (
  <CheckoutContainer>
    <CheckoutHeader />
    <div className="checkout-items">
      {
        cartItems.map(item =>
          <CheckoutItem item={item} key={item.id}/>
        )
      }
    </div>
  </CheckoutContainer>
)

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CheckoutPage);
