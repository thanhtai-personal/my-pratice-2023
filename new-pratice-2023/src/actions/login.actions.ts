import AuthActionsType from "actionTypes/auth.actionsType";
import LoginActionType from "actionTypes/login.actionsType";
import { login as loginApi } from "apis/userApi";
import { NotiStackInstance } from "App";
import store from "store";

export const login = async () => {
  store.dispatch({
    type: LoginActionType.UPDATE_LOADING_LOGIN,
    payload: true,
  });
  try {
    const { login } = store.getState();
    const response = await loginApi({
      username: login.username,
      password: login.password,
    });
    store.dispatch({
      type: AuthActionsType.UPDATE_AUTHEN_DATA,
      payload: response.data,
    });
  } catch (error: any) {
    NotiStackInstance.push({
      children: error.message || "login failed!",
      variant: "error",
    });
  }
  store.dispatch({
    type: LoginActionType.UPDATE_LOADING_LOGIN,
    payload: false,
  });
};

export const updateUsername = (data: { value: string }) => {
  store.dispatch({
    type: LoginActionType.UPDATE_LOGIN_USER_NAME,
    payload: data.value,
  });
};

export const updatePassword = (data: { value: string }) => {
  store.dispatch({
    type: LoginActionType.UPDATE_LOGIN_PASSWORD,
    payload: data.value,
  });
};
