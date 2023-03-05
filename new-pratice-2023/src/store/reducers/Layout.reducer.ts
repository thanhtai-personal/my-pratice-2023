import layoutActionsType from "actionTypes/layout.actionsType";
import { makeObservable, observable } from "mobx";
import BaseReducer from "./Base.reducer";

class LayoutModel extends BaseReducer {
  //initial data
  @observable protected isGlobalLoading = false as boolean;
  @observable protected useHeader = true as boolean;
  @observable protected useFooter = true as boolean;
  @observable protected isOpenAppMenu = true as boolean;

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([
      {
        type: layoutActionsType.UPDATE_GLOBAL_LOADING,
        handler: (data: boolean) => {
          this.isGlobalLoading = data;
        },
      },
      {
        type: layoutActionsType.OPEN_OR_CLOSE_HEADER,
        handler: (data: boolean) => {
          this.useHeader = data;
        },
      },
      {
        type: layoutActionsType.OPEN_OR_CLOSE_FOOTER,
        handler: (data: boolean) => {
          this.useFooter = data;
        },
      },
      {
        type: layoutActionsType.OPEN_OR_CLOSE_APP_MENU,
        handler: (data: boolean) => {
          this.isOpenAppMenu = data;
        },
      },
    ]);
    makeObservable(this);
  }
}

export default LayoutModel;
