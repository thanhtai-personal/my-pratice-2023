import AuthActionsType from "src/actionTypes/auth.actionsType";
import LoginActionType from "src/actionTypes/login.actionsType";
import { login as loginApi } from "src/apis/userApi";
import { loginSchema } from "pages/login/model.login";
import store from "src/store";

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
  } catch (error: any) {}
  store.dispatch({
    type: LoginActionType.UPDATE_LOADING_LOGIN,
    payload: false,
  });
};

export const updateValidate = () => {
  const { username, password } = store.getState((state) => state.login);
  console.log(
    "data",
    store.getState((state) => state.login)
  );
  loginSchema
    .validate(
      {
        username,
        password,
      },
      { abortEarly: false }
    )
    .then((valid) => {
      store.dispatch({
        type: LoginActionType.UPDATE_VALIDATE,
        payload: [],
      });
    })
    .catch((err) => {
      store.dispatch({
        type: LoginActionType.UPDATE_VALIDATE,
        payload: err.errors,
      });
    });
};

export const updateUsername = (data: { value: string }) => {
  store.dispatch({
    type: LoginActionType.UPDATE_LOGIN_USER_NAME,
    payload: data.value,
  });
  updateValidate();
};

export const updatePassword = (data: { value: string }) => {
  store.dispatch({
    type: LoginActionType.UPDATE_LOGIN_PASSWORD,
    payload: data.value,
  });
  updateValidate();
};
