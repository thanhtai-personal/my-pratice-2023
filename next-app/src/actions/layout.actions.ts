import store from "src/store";
import LayoutActionsType from "src/actionTypes/layout.actionsType";
import { MenuItemType } from "src/components/AppLayout/AppMenu/MenuItem";

export const updateGlobalLoading = (value) => {
  store.dispatch({
    type: LayoutActionsType.UPDATE_GLOBAL_LOADING,
    payload: value,
  });
};

export const updateActiveAlimentMenu = (alignment) => {
  store.dispatch({
    type: LayoutActionsType.UPDATE_ACTIVE_ALIGNMENT_MENU,
    payload: alignment,
  });
};

export const toggleHeader = (isOpen: boolean) => {
  store.dispatch({
    type: LayoutActionsType.OPEN_OR_CLOSE_HEADER,
    payload: isOpen,
  });
};

export const setAppMenu = (data: {
  dividerList?: Array<MenuItemType>;
  menus?: Array<MenuItemType>;
}) => {
  store.dispatch({
    type: LayoutActionsType.UPDATE_APP_MENU,
    payload: data,
  });
};
