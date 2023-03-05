import { dispatch } from "dispatcher";
import LayoutActionsType from "actionTypes/layout.actionsType";

export const updateGlobalLoading = (value) => {
  dispatch({
    type: LayoutActionsType.UPDATE_GLOBAL_LOADING,
    data: value,
  });
};

export const updateActiveAlimentMenu = (alignment) => {
  dispatch({
    type: LayoutActionsType.UPDATE_ACTIVE_ALIGNMENT_MENU,
    data: alignment,
  });
};
