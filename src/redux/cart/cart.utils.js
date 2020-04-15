///////////////////// ADDING ITEM TO THE CART /////////////////////
export const addItemToCart = (cartItems, itemToAdd) => {

  const noSize = itemToAdd[0] == null ? true : false

  const existingCartItem = cartItems.find(
    cartItem => noSize ? cartItem.id === itemToAdd[1].id : cartItem.id === itemToAdd[0].id);

  if (existingCartItem){
    return cartItems.map(cartItem =>
        noSize ?
        (cartItem.id === itemToAdd[1].id ? {...itemToAdd[1], quantity: cartItem.quantity + 1, price: itemToAdd[1].variants[0].price} : cartItem)
        :
        (cartItem.id === itemToAdd[0].id ? {...itemToAdd[0], quantity: cartItem.quantity + 1} : cartItem)
      )
  }
  return noSize ?
  [...cartItems, {...itemToAdd[1], quantity: 1, productName: itemToAdd[1].title, price: itemToAdd[1].variants[0].price}]
    :
  [...cartItems, {...itemToAdd[0], quantity: 1, productName: itemToAdd[1].title}]
}

///////////////////// REMOVING ITEM FROM THE CART /////////////////////
export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToRemove.id);

  if (existingCartItem) {
    return cartItems.filter(cartItem =>
      cartItem.id !==itemToRemove.id
      )
  }
  return cartItems
}
