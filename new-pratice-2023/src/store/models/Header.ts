import { makeObservable, observable } from "mobx";
import BaseModel from "./BaseModel";

class HeaderModel extends BaseModel {
  //initial data
  @observable protected isLoading = false as boolean;
  @observable protected useSearchBox = true as boolean;
  @observable protected useMailbox = true as boolean;
  @observable protected useAccountMenu = true as boolean;
  @observable protected useNotification = true as boolean;

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([]);
    makeObservable(this);
  }
}

export default HeaderModel;
