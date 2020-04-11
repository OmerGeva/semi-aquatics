import {setDropProducts} from './product.utils'

const INITIAL_STATE = {
  products: {}
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SET_DROP_PRODUCTS':
      return{
        ...state,
        products: setDropProducts(action.payload)
      }
    default:
      return{
        state
      }

  }
}

export default productReducer;
