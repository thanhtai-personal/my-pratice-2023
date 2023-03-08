import AuthActionsType from "actionTypes/auth.actionsType";
import initialState, { AuthState } from "./initialState";

const authReducer = (state: AuthState = initialState, action) => {
  switch (action.type) {
    case AuthActionsType.UPDATE_AUTHEN_DATA:
      return {
        ...state,
        authenUser: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
