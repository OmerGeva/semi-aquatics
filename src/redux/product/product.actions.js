import ProductActionTypes from './product.types'
import Client from 'shopify-buy';
const client = Client.buildClient({
      domain: 'semi-aquatics.myshopify.com',
      storefrontAccessToken: 'a841eca62f514cb4af9d650a38075fbf'
    });

export const fetchProductsStart = () => ({
  type: ProductActionTypes.SET_DROP_PRODUCTS_START
});

export const fetchProductsSuccess = productsMap  => ({
  type: ProductActionTypes.SET_DROP_PRODUCTS_SUCCESS,
  payload: productsMap
});

export const fetchProductsFailure = errorMessage  => ({
  type: ProductActionTypes.SET_DROP_PRODUCTS_SUCCESS,
  payload: errorMessage
});

export const fetchProductsStartAsync = () =>{
  return dispatch => {
    dispatch(fetchProductsStart());

    client.collection.fetchAllWithProducts().then((collections) => {
      // Do something with the collections
      dispatch(fetchProductsSuccess(collections[2].products));
    }).catch(error =>
      dispatch(fetchProductsFailure(error.message))
    );
  }
}
