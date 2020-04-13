import { createSelector } from 'reselect';

export const selectProduct = state => {
  return state.product;
}


export const selectIsProductsFetching = createSelector(
  [selectProduct],
  products => products.isFetching
  )
