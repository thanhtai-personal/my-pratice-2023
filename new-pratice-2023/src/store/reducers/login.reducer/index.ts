import initialState, { LoginState } from "./initialState";
import LoginActionType from "actionTypes/login.actionsType";

const loginReducer = (state: LoginState = initialState, action: any) => {
  switch (action.type) {
    case LoginActionType.UPDATE_LOADING_LOGIN:
      return {
        ...state,
        loading: action.payload,
      };
    case LoginActionType.UPDATE_LOGIN_USER_NAME:
      return {
        ...state,
        username: action.payload,
      };
    case LoginActionType.UPDATE_LOGIN_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case LoginActionType.UPDATE_VALIDATE:
      return {
        ...state,
        validateObj: {
          ...state.validateObj,
          errors: action.payload,
        },
      };
    default:
      return state;
  }
};

export default loginReducer;
