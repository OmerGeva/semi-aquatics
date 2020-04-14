import { cartActionTypes } from './cart.types';

export const addItemToCart = (variantProduct, product) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: [variantProduct, product]
})

export const removeItemFromCart = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
})
