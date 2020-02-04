import {
  SET_THEME_COLOR
} from "../Actions";

export default (
  state = {
    themeColor: 'dark'
  },
  action
) => {
  switch (action.type) {
    case SET_THEME_COLOR:
      return {
        ...state,
        themeColor: action.themeColor
      };
    default:
      return state;
  }
};
