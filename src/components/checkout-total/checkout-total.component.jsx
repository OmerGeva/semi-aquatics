import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { CheckoutTotalContainer } from './checkout-total.styles';
import CustomButtom from '../custom-button/custom-button.component'
import { resetCart, updateCheckoutAsync } from '../../redux/cart/cart.actions'

const CheckoutTotal = () =>
{
  const dispatch = useDispatch();

  const totalPrice = useSelector(state => state.cart.cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + (cartItem.quantity * cartItem.price), 0));
  const totalItems = useSelector(state => state.cart.cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0));
  const checkoutUrl = useSelector(state => state.cart.checkout ? state.cart.checkout.webUrl : '/checkout');

  const handleGoToCheckout = () => {
    dispatch(resetCart());
    dispatch(updateCheckoutAsync());
  }

  return(


    <CheckoutTotalContainer>
      <h5>ORDER SUMMARY</h5>
      <div className="totals-mobile">
        <div className="total-price">
          <h5>ITEMS</h5>
          <p>{totalItems}</p>
        </div>
        <div className="total-price">
          <h5>TOTAL</h5>
          <p>${totalPrice}</p>
        </div>
      </div>
      <div className="item-space"></div>
      <div className="center-button" onClick={checkoutUrl === '/checkout' ? '' : () => handleGoToCheckout()}>
        <a href={checkoutUrl} >
          <CustomButtom>
          PAY NOW
          </CustomButtom>
        </a>
      </div>
    </CheckoutTotalContainer>
  )
}
export default CheckoutTotal;
