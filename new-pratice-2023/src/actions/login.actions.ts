import AuthActionsType from "actionTypes/auth.actionsType";
import LoginActionType from "actionTypes/login.actionsType";
import { login as loginApi } from "apis/userApi";
import { NotiStackInstance } from "App";
import { dispatch, getState } from "dispatcher";

export const login = async () => {
  dispatch({
    type: LoginActionType.UPDATE_LOADING_LOGIN,
    data: true,
  });
  try {
    const { login } = getState();
    const response = await loginApi({
      username: login.username,
      password: login.password,
    });
    dispatch({
      type: AuthActionsType.UPDATE_AUTHEN_DATA,
      data: response.data,
    });
  } catch (error: any) {
    NotiStackInstance.push({
      children: error.message || "login failed!",
      variant: "error",
    });
  }
  dispatch({
    type: LoginActionType.UPDATE_LOADING_LOGIN,
    data: false,
  });
};

export const updateUsername = (data: { value: string }) => {
  dispatch({
    type: LoginActionType.UPDATE_LOGIN_USER_NAME,
    data: data.value,
  });
};

export const updatePassword = (data: { value: string }) => {
  dispatch({
    type: LoginActionType.UPDATE_LOGIN_PASSWORD,
    data: data.value,
  });
};
