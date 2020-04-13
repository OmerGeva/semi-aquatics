import { cartActionTypes } from './cart.types';

export const addItemToCart = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})
