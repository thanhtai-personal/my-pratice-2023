import AuthActionsType from "actionTypes/auth.actionsType";
import { getAuth } from "apis/userApi";
import { NotiStackInstance } from "App";
import { dispatch } from "dispatcher";

export const getAuthData = async () => {
  dispatch({
    type: AuthActionsType.UPDATE_LOADING_AUTHEN,
    data: true,
  });
  try {
    const response = await getAuth();
    dispatch({
      type: AuthActionsType.UPDATE_AUTHEN_DATA,
      data: response.data,
    });
  } catch (error: any) {
    NotiStackInstance.push({
      children: error.message || "Get authen data failed!",
      variant: "error",
    });
  }
  dispatch({
    type: AuthActionsType.UPDATE_LOADING_AUTHEN,
    data: false,
  });
};
