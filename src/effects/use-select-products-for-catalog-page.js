import { useSelector } from 'react-redux';


export const useSelectProductForCatalogPage = () => {
  const state = useSelector(state => state);
  let productsArray = []
  if(state.product && state.product.products){

    const products = state.product.products

    const unique = (value, index, self) => {
      console.log();
      return value.id === self[self.indexOf(value)].id && self.indexOf(value) === index
    }
    const getProductWithId = (productId, allProducts) => {
      return allProducts.find(product => product[0].id === productId)
    }
    const productArrayIdsWithDuplicates = []

    products.forEach(drop =>
        {
          if(drop.products){
            drop.products.forEach(product => productArrayIdsWithDuplicates.push(product.id))
          }
        }
      )
    const productsArrayWithDuplicates = []
    products.forEach(drop =>
      {
        if(drop.products){
            drop.products.forEach(product => productsArrayWithDuplicates.push([product, drop]))
          }
        }
      )

    const productArrayIdsWithoutDuplicates = productArrayIdsWithDuplicates.filter(unique)

    productsArray = productArrayIdsWithoutDuplicates.map(productId => getProductWithId(productId, productsArrayWithDuplicates))
  }
  return productsArray.reverse();
}
