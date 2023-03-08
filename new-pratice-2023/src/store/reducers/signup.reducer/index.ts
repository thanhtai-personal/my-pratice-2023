import initialState, { SignupState } from "./initialState";
import SignupActionType from "actionTypes/signup.actionsType";

const loginReducer = (state: SignupState = initialState, action: any) => {
  switch (action.type) {
    case SignupActionType.UPDATE_LOADING_SIGNUP:
      return {
        ...state,
        loading: action.payload,
      };
    case SignupActionType.UPDATE_SIGNUP_USER_NAME:
      return {
        ...state,
        username: action.payload,
      };
    case SignupActionType.UPDATE_SIGNUP_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SignupActionType.UPDATE_SIGNUP_PASSWORD_CONFIRM:
      return {
        ...state,
        confirmPassword: action.payload,
      };
    case SignupActionType.UPDATE_FULL_NAME:
      return {
        ...state,
        fullname: action.payload,
      };
    case SignupActionType.UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SignupActionType.UPDATE_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case SignupActionType.UPDATE_VALIDATE:
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
