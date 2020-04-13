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
    (accumalatedQuantity, cartItem) => accumalatedQuantity + (cartItem.quantity * cartItem.variants[0].price), 0)
  )
