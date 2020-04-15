import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectTotalCartPrice, selectCartItemCount, selectCartCheckoutUrl } from '../../redux/cart/cart.selectors'
import { CheckoutTotalContainer } from './checkout-total.styles';
import CustomButtom from '../custom-button/custom-button.component'

const CheckoutTotal = ({ totalPrice, totalItems, checkoutUrl }) => (
  <CheckoutTotalContainer>
    <h5>ORDER SUMMARY</h5>
    <div className="total-price">
      <h5>ITEMS</h5>
      <p>{totalItems}</p>
    </div>
    <div className="total-price">
      <h5>TOTAL</h5>
      <p>${totalPrice}</p>
    </div>
    <div className="item-space"></div>
    <div className="center-button">
      <a href={checkoutUrl}>
        <CustomButtom>
        PAY NOW
        </CustomButtom>
      </a>
    </div>
  </CheckoutTotalContainer>
)

const mapStateToProps = createStructuredSelector({
  totalPrice: selectTotalCartPrice,
  totalItems: selectCartItemCount,
  checkoutUrl: selectCartCheckoutUrl
})
export default connect(mapStateToProps)(CheckoutTotal);
