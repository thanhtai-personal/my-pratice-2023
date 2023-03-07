import localizeActionTypes from "actionTypes/localize.actionsType";
import { LangKeys } from "locales/i18n";
import { makeObservable, observable, action } from "mobx";
import BaseReducer from "./Base.reducer";

class LocalizeReducer extends BaseReducer {
  //initial data
  @observable protected key = LangKeys.en as string;

  @action updateLangKey = (value: string) => {
    this.key = value;
  };

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([
      {
        type: localizeActionTypes.CHANGE_LANGUAGE,
        handler: (data: string) => {
          this.key = data;
        },
      },
    ]);
    makeObservable(this);
  }
}

export default LocalizeReducer;
