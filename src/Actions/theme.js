export const SET_THEME_COLOR = "SET_THEME_COLOR";

export const themeColor = (themeColor) => (dispatch, getState) => {
  dispatch({
    type: SET_THEME_COLOR,
    themeColor
  })
}
