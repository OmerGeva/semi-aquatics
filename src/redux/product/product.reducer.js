import productActionTypes from './product.types'

const INITIAL_STATE = {
  products: null,
  isFetching: false,
  chosenProduct: null,
  errorMessage: ''
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case productActionTypes.SET_CHOSEN_PRODUCT:
      return{
        ...state,
        chosenProduct: action.payload
      }
    case productActionTypes.SET_DROP_PRODUCTS_START:
      return{
        ...state,
        isFetching: true
      }
    case productActionTypes.SET_DROP_PRODUCTS_SUCCESS:
      return{
        ...state,
        isFetching: false,
        products: action.payload
      }
    case productActionTypes.SET_DROP_PRODUCTS_FAILURE:
      return{
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default productReducer;
