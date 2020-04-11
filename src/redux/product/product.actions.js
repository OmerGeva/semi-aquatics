const INITIAL_STATE = {
  dropNumber: 6
}
export const setCurrentProducts = (dropNumber = INITIAL_STATE.dropNumber) => ({
  type: 'SET_DROP_PRODUCTS',
  payload: dropNumber
});
