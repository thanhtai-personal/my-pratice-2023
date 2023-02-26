import { makeObservable, observable } from "mobx";
import BaseModel from "./BaseModel";

class FooterModel extends BaseModel {
  //initial data
  @observable protected isLoading = false as boolean;

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([]);
    makeObservable(this);
  }
}

export default FooterModel;
