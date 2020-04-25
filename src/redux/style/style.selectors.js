import { createSelector } from 'reselect';

const selectStyle = state => state.style;

export const selectIsDark = createSelector(
  [selectStyle],
  style => style.isDark
)
