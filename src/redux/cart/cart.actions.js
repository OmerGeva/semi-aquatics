import { cartActionTypes } from './cart.types';
import Client from 'shopify-buy';

export const addItemToCart = (variantProduct, product) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: [variantProduct, product]
})

export const removeItemFromCart = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
})

export const createCheckout = (checkout) => ({
  type: cartActionTypes.CREATE_CHECK_OUT,
  payload: checkout
})

export const updateCheckout = (checkout) => ({
  type: cartActionTypes.UPDATE_CHECK_OUT,
  payload: checkout
})

export const removeItemFromCheckout = (checkout) => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CHECKOUT,
  payload: checkout
})

/////////////////////// ADDING AN ITEM TO THE CART AND CHECKOUT OBJECT ASYNCHRONOUSLY ///////////////////////
export const addItemToCartAsync = (variantProduct, product, checkout) => {
  return dispatch => {
    dispatch(addItemToCart(variantProduct, product))
    const client = Client.buildClient({
      domain: 'semi-aquatics.myshopify.com',
      storefrontAccessToken: process.env.REACT_APP_STORE_FRONT_ACCESS_TOKEN
    });
    ////////// IF THERE IS A CHECKOUT ALREADY //////////

    if(checkout === undefined || checkout === null){
    const lineItemsToAdd = [
      {
        variantId: variantProduct.id,
        quantity: 1
      }
      ];
      client.checkout.create().then((checkout) => {
        dispatch(createCheckout(checkout));
        client.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkout) => {
          dispatch(updateCheckout(checkout));
        });

      });
    }
    ////////// ADD ITEM TO THE CHECKOOUT //////////
    else{
      const exisitingCartItem = checkout.lineItems.find(item =>
        item.id === variantProduct.id
        )
      if(exisitingCartItem){
        const lineItemsToUpdate = [
          {id: variantProduct.id, quantity: exisitingCartItem.quantity += 1}
        ];

        client.checkout.updateLineItems(checkout.id, lineItemsToUpdate).then((checkout) => {
          dispatch(updateCheckout(checkout));
        });
      }
      else{
        const lineItemsToAdd = [
          {
            variantId: variantProduct.id,
            quantity: 1
          }
        ];
        client.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkout) => {
          dispatch(updateCheckout(checkout));
        });

      }
    }
  }
}

/////////////////////// REMOVING AN ITEM FROM THE CART AND CHECKOUT OBJECT ASYNCHRONOUSLY ///////////////////////

export const removeItemFromCartAsync = (item, checkout) => {
  return dispatch => {
    dispatch(removeItemFromCart(item));
    const client = Client.buildClient({
      domain: 'semi-aquatics.myshopify.com',
      storefrontAccessToken: process.env.REACT_APP_STORE_FRONT_ACCESS_TOKEN
    });
    const checkoutItemToRemove = checkout.lineItems.find(checkoutItem =>
      checkoutItem.variant.id === item.id
    )
    const checkoutId = checkout.id
    const lineItemIdsToRemove = [
      checkoutItemToRemove.id
    ];

    client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then((checkout) => {
      dispatch(removeItemFromCheckout(checkout));
    });

  }
}


