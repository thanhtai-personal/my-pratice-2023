import initialState, { ThemeState } from "./initialState";
import ThemeActionsType from "actionTypes/theme.actionsType";

const themeReducer = (state: ThemeState = initialState, action: any) => {
  switch (action.type) {
    case ThemeActionsType.UPDATE_THEME:
      return {
        ...state,
        themeKey: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
