import LayoutActionsType from "actionTypes/layout.actionsType";
import initialState, { MenuState } from "./initialState";

const AppMenuReducer = (state: MenuState = initialState, action) => {
  switch (action.type) {
    case LayoutActionsType.TOGGLE_APP_MENU:
      return {
        ...state,
        isMenuOpen: action.payload,
      };
    default:
      return state;
  }
};

export default AppMenuReducer;
