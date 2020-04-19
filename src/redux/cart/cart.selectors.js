import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
  )

export const selectCartItemCount = createSelector(
  [selectCartItems],
    cartItems=> cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
  )

export const selectTotalCartPrice = createSelector(
  [selectCartItems],
    cartItems=> cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + (cartItem.quantity * cartItem.price), 0)
  )
export const selectCartCheckout = createSelector(
  [selectCart],
  cart => cart.checkout
  )
export const selectCartCheckoutUrl = createSelector(
  [selectCartCheckout],
  checkout => checkout ? checkout.webUrl : '/checkout'
  )
export const selectCartInventoryQuantity = createSelector(
  [selectCart],
  cart => cart.inventoryQuantity
  )
