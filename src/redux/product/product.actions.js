import productActionTypes from './product.types'
import Client from 'shopify-buy';

const client = Client.buildClient({
      domain: 'semi-aquatics.myshopify.com',
      storefrontAccessToken: process.env.REACT_APP_STORE_FRONT_ACCESS_TOKEN
    });

export const fetchProductsStart = () => ({
  type: productActionTypes.SET_DROP_PRODUCTS_START
});

export const fetchProductsSuccess = productsMap  => ({
  type: productActionTypes.SET_DROP_PRODUCTS_SUCCESS,
  payload: productsMap
});

export const fetchProductsFailure = errorMessage  => ({
  type: productActionTypes.SET_DROP_PRODUCTS_SUCCESS,
  payload: errorMessage
});

export const fetchProductsStartAsync = (dropNumber) =>{
  return dispatch => {
    dispatch(fetchProductsStart());

    client.collection.fetchAllWithProducts().then((collections) => {
      // Do something with the collections
      dispatch(fetchProductsSuccess(collections));
    }).catch(error =>
      dispatch(fetchProductsFailure(error.message))
    );
  }
}
