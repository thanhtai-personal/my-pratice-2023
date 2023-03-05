import { makeObservable, observable } from "mobx";
import BaseReducer from "./Base.reducer";

class FooterModel extends BaseReducer {
  //initial data
  @observable protected isLoading = false as boolean;

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([]);
    makeObservable(this);
  }
}

export default FooterModel;
