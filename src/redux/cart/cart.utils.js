export const addItemToCart = (cartItems, itemToAdd) => {
  console.log(cartItems)
  console.log(itemToAdd)
  cartItems.push(itemToAdd);

  return cartItems
}
