import LoginActionType from "actionTypes/login.actionsType";
import { action, makeObservable, observable } from "mobx";
import BaseReducer from "./Base.reducer";

class LoginReducer extends BaseReducer {
  //initial data
  @observable protected username = "" as string;
  @observable protected password = "" as string;

  @action updateUsername = (value) => {
    this.username = value;
  };

  @action updatePassword = (value) => {
    this.password = value;
  };

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([
      {
        type: LoginActionType.UPDATE_LOGIN_USER_NAME,
        handler: (data: string) => {
          this.updateUsername(data);
        },
      },
      {
        type: LoginActionType.UPDATE_LOGIN_PASSWORD,
        handler: (data: string) => {
          this.updatePassword(data);
        },
      },
    ]);
    makeObservable(this);
  }
}

export default LoginReducer;
