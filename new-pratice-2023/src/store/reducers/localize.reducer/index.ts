import initialState, { LayoutState } from "./initialState";
import localizeActionTypes from "actionTypes/localize.actionsType";

const localizeReducer = (state: LayoutState = initialState, action) => {
  switch (action.type) {
    case localizeActionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        key: action.payload,
      };
    default:
      return state;
  }
};

export default localizeReducer;
