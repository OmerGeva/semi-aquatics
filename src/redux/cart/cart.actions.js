import { cartActionTypes } from './cart.types';
import Client from 'shopify-buy';
// const axios = require('axios');

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

export const checkItemInventoryQuantity = (quantity) => ({
  type: cartActionTypes.CHECK_INVENTORY_QUANTITY,
  payload: quantity
})

/////////////////////// ADDING AN ITEM TO THE CART AND CHECKOUT OBJECT ASYNCHRONOUSLY ///////////////////////
export const addItemToCartAsync = (variantProduct, product, checkout, inventoryQuantity) => {
  // const variantId = window.atob(variantProduct.id).replace('gid://shopify/ProductVariant/', '');
  // const productId = window.atob(product.id).replace('gid://shopify/Product/', '');

  return dispatch => {
    const client = Client.buildClient({
      domain: 'semi-aquatics.myshopify.com',
      storefrontAccessToken: process.env.REACT_APP_STORE_FRONT_ACCESS_TOKEN
    });
    ////////// IF THERE ISN'T A CHECKOUT ALREADY //////////

    if(checkout === undefined || checkout === null || (checkout !== null && checkout.completedAt !== null)){
    dispatch(addItemToCart(variantProduct, product))

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
    ////////// ADD ITEM TO THE CHECKOUT //////////
    else{
      const exisitingCartItem = checkout.lineItems.find(checkoutItem =>
        checkoutItem.variant.id === variantProduct.id
        )
      if(exisitingCartItem){
        // COMMENTED OUT, DOESN'T WORK IN PRODUCTION
      //   axios.get(`/api/item-info`, {
      //       params: {
      //         productId: productId,
      //         variantId: variantId
      //       }
      //     })
      //     .then(response => response.data)
      //     .then(data =>
      //       dispatch(checkItemInventoryQuantity(parseInt(data.variant.inventory_quantity)))
      //     )
      //     .catch(error => console.log(error));
        // if(inventoryQuantity && inventoryQuantity > exisitingCartItem.quantity){
          dispatch(addItemToCart(variantProduct, product))
          const lineItemsToUpdate = [
            {id: exisitingCartItem.id, quantity: exisitingCartItem.quantity + 1}
          ];
          client.checkout.updateLineItems(checkout.id, lineItemsToUpdate).then((checkout) => {
            dispatch(updateCheckout(checkout));
          });
        // }
      }
      else{
        dispatch(addItemToCart(variantProduct, product))
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



