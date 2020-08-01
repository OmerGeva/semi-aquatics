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
  product => product ? product.variants : product
)

// GETTING AN ARRAY OF [PRODUCT, DROP] FOR CATALOG PAGE, SO THERE WILL BE NO DUPLICATES, AND CAN STILL ACCESS DROP INFO
// MESSY, TO CLEAN UP
export const selectProductsForCatalogPage = state => {
  const products = state.product.products

  const unique = (value, index, self) => {
    console.log();
    return value.id === self[self.indexOf(value)].id && self.indexOf(value) === index
  }
  const getProductWithId = (productId, allProducts) => {
    return allProducts.find(product => product[0].id === productId)
  }
  const productArrayIdsWithDuplicates = []

  products.forEach(drop => drop.products.forEach(product => productArrayIdsWithDuplicates.push(product.id)))
  const productsArrayWithDuplicates = []
  products.forEach(drop => drop.products.forEach(product => productsArrayWithDuplicates.push([product, drop])))

  const productArrayIdsWithoutDuplicates = productArrayIdsWithDuplicates.filter(unique)

  const productsArray = productArrayIdsWithoutDuplicates.map(productId => getProductWithId(productId, productsArrayWithDuplicates))
  return productsArray.reverse();
}
