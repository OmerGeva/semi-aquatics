import { createSelector } from 'reselect';

export const selectProducts = state => {
  return state.product;
}

export const selectChosenProduct = state => {
  return state.product.chosenProduct;
}


export const selectIsProductsFetching = createSelector(
  [selectProducts],
  products => products.isFetching
  )

export const selectProductSizes = createSelector(
  [selectChosenProduct],
  product => product.variants
  )
