import LayoutActionsType from "actionTypes/layout.actionsType";
import initialState, { LayoutState } from "./initialState";

const layoutReducer = (state: LayoutState = initialState, action) => {
  switch (action.type) {
    case LayoutActionsType.UPDATE_GLOBAL_LOADING:
      return {
        ...state,
        isGlobalLoading: action.payload,
      };
    case LayoutActionsType.OPEN_OR_CLOSE_HEADER:
      return {
        ...state,
        useHeader: action.payload,
      };
    case LayoutActionsType.OPEN_OR_CLOSE_FOOTER:
      return {
        ...state,
        useFooter: action.payload,
      };
    case LayoutActionsType.UPDATE_ACTIVE_ALIGNMENT_MENU:
      return {
        ...state,
        menuAlignment: action.payload,
      };
    case LayoutActionsType.UPDATE_APP_MENU:
      return {
        ...state,
        menus: action.payload.menus,
        dividerList: action.payload.dividerList,
      };
    default:
      return state;
  }
};

export default layoutReducer;
