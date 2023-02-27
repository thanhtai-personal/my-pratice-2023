import themeActionsType from "actionTypes/theme.actionsType";
import { makeObservable, observable } from "mobx";
import { THEME } from "themes";
import BaseModel from "./BaseModel";

class ThemeModel extends BaseModel {
  //initial data
  @observable protected themeKey = THEME.DARK as string;

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([
      {
        type: themeActionsType.UPDATE_THEME,
        handler: (data: string) => {
          this.themeKey = data;
        },
      },
    ]);
    makeObservable(this);
  }
}

export default ThemeModel;
