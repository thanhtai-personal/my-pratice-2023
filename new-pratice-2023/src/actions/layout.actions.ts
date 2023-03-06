import { dispatch } from "dispatcher";
import LayoutActionsType from "actionTypes/layout.actionsType";
import { MenuItemType } from "components/AppLayout/AppMenu/MenuItem";

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

export const setAppMenu = (data: {
  dividerList?: Array<MenuItemType>;
  menus?: Array<MenuItemType>;
}) => {
  dispatch({
    type: LayoutActionsType.UPDATE_APP_MENU,
    data,
  });
};
