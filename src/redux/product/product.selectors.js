import { createSelector } from 'reselect';

export const selectProducts = state => {
  return state.product;
}

export const selectChosenProduct = state => {
  return state.product.chosenProduct;
}

export const selectIsProductsSizeHidden = createSelector(
  [selectProducts],
  products => products.hidden
  )
export const selectVariantProduct = createSelector(
  [selectProducts],
  products => products.chosenVariantProduct
  )

export const selectIsProductsFetching = createSelector(
  [selectProducts],
  products => products.isFetching
  )

export const selectProductSizes = createSelector(
  [selectChosenProduct],
  product => product.variants
)
