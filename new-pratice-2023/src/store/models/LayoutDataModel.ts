import layoutActionsType from "actionTypes/layout.actionsType";
import { makeObservable, observable } from "mobx";
import BaseModel from "./BaseModel";

class LayoutDataModel extends BaseModel {
  //initial data
  @observable protected isGlobalLoading = false;

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([
      {
        type: layoutActionsType.UPDATE_GLOBAL_LOADING,
        handler: (data) => {
          this.isGlobalLoading = data;
        },
      },
    ]);
    makeObservable(this);
  }
}

export default LayoutDataModel;
