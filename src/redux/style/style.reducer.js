import styleActionTypes from './style.types'

const INITIAL_STATE = {
  isDark: true,
  modalOpen: true
}

const styleReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case styleActionTypes.TOGGLE_DARK_THEME:
      return {
        ...state,
        isDark: !state.isDark
      }
    case styleActionTypes.ClOSE_MODAL:
      return {
        ...state,
        modalOpen: false
      }

    default:
      return state;
  }
}

export default styleReducer;
