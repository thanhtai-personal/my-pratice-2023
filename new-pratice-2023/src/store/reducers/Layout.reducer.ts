import layoutActionsType from "actionTypes/layout.actionsType";
import { Alignment } from "components/AppLayout/AppMenu";
import { makeObservable, observable, action } from "mobx";
import BaseReducer from "./Base.reducer";

class LayoutModel extends BaseReducer {
  //initial data
  @observable protected isGlobalLoading = false as boolean;
  @observable protected useHeader = true as boolean;
  @observable protected useFooter = true as boolean;
  @observable protected menuAlignment = [] as Array<Alignment>;

  @action public updateGlobalLoading = (loading: boolean) => {
    this.isGlobalLoading = loading;
  };

  @action public updateUseHeader = (value: boolean) => {
    this.useHeader = value;
  };

  @action public updateUseFooter = (value: boolean) => {
    this.useFooter = value;
  };

  @action public updateMenuAlignment = (value: Array<any>) => {
    this.menuAlignment = value;
  };

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([
      {
        type: layoutActionsType.UPDATE_GLOBAL_LOADING,
        handler: (data: boolean) => {
          this.updateGlobalLoading(data);
        },
      },
      {
        type: layoutActionsType.OPEN_OR_CLOSE_HEADER,
        handler: (data: boolean) => {
          this.updateUseHeader(data);
        },
      },
      {
        type: layoutActionsType.OPEN_OR_CLOSE_FOOTER,
        handler: (data: boolean) => {
          this.updateUseFooter(data);
        },
      },
      {
        type: layoutActionsType.UPDATE_ACTIVE_ALIGNMENT_MENU,
        handler: (data: Array<Alignment>) => {
          this.updateMenuAlignment(data);
        },
      },
    ]);
    makeObservable(this);
  }
}

export default LayoutModel;
