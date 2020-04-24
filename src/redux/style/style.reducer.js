import styleActionTypes from './style.types'

const INITIAL_STATE = {
  isDark: false
}

const styleReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case styleActionTypes.TOGGLE_DARK_THEME:
      return {
        ...state,
        isDark: !state.isDark
      }

    default:
      return state;
  }
}

export default styleReducer;
