import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import productReducer from './product/product.reducer';
import cartReducer from './cart/cart.reducer'
import styleReducer from './style/style.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['product', 'cart', 'style']
}

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  style: styleReducer
});

export default persistReducer(persistConfig, rootReducer);
