import { cartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
  cartItems: [],
  checkout: null
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case cartActionTypes.CREATE_CHECK_OUT:
      return {
        ...state,
        checkout: action.payload
      }
    case cartActionTypes.UPDATE_CHECK_OUT:
      return {
        ...state,
        checkout: action.payload
      }
    case cartActionTypes.REMOVE_ITEM_FROM_CHECKOUT:
      return {
        ...state,
        checkout: action.payload
      }
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}

export default cartReducer;
