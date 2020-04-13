import { combineReducers } from 'redux';

import productReducer from './product/product.reducer';
import cartReducer from './cart/cart.reducer'
export default combineReducers({
  product: productReducer,
  cart: cartReducer
})
