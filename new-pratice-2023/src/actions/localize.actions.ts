import { dispatch } from "dispatcher";
import LocalizeActionTypes from "actionTypes/localize.actionsType";

export const changeLanguage = (value) => {
  dispatch({
    type: LocalizeActionTypes.CHANGE_LANGUAGE,
    data: value,
  });
};
