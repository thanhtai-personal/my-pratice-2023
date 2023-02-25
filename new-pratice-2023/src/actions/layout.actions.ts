import { getState, dispatch } from "dispatcher";
import LayoutActionsType from "actionTypes/layout.actionsType";

export const updateGlobalLoading = (value) => {
  dispatch({
    type: LayoutActionsType.UPDATE_GLOBAL_LOADING,
    data: value,
  });
};
