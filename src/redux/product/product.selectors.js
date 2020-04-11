import { createSelector } from 'reselect';

const selectProduct = state => {
  return state.product;
}


export const selectIsProductsFetching = createSelector(
  [selectProduct],
  products => products.isFetching
  )
