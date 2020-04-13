import { cartActionTypes } from './cart.types';


const INITIAL_STATE = {
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: action.payload
      }
    default:
      return {
          state
      }
  }
}

export default cartReducer;
