import AuthActionsType from "actionTypes/auth.actionsType";
import { action, makeObservable, observable } from "mobx";
import BaseReducer from "./Base.reducer";

class AuthReducer extends BaseReducer {
  //initial data
  @observable protected authenUser = {} as any | null;

  @action updateAuthen = (data) => {
    this.authenUser = data;
  };

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([
      {
        type: AuthActionsType.UPDATE_AUTHEN_DATA,
        handler: (data: boolean) => {
          this.updateAuthen(data);
        },
      },
    ]);
    makeObservable(this);
  }
}

export default AuthReducer;
