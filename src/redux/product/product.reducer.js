import ProductActionTypes from './product.types'

const INITIAL_STATE = {
  products: null,
  isFetching: false,
  errorMessage: ''
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ProductActionTypes.SET_DROP_PRODUCTS_START:
      return{
        ...state,
        isFetching: true
      }
    case ProductActionTypes.SET_DROP_PRODUCTS_SUCCESS:
      return{
        ...state,
        isFetching: false,
        products: action.payload
      }
    case ProductActionTypes.SET_DROP_PRODUCTS_FAILURE:
      return{
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return{
        state
      }

  }
}

export default productReducer;
