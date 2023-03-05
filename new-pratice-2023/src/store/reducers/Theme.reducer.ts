import themeActionsType from "actionTypes/theme.actionsType";
import { makeObservable, observable, action } from "mobx";
import { THEME } from "themes";
import BaseReducer from "./Base.reducer";

class ThemeModel extends BaseReducer {
  //initial data
  @observable protected themeKey = THEME.DARK as string;

  @action public updateThemeKey = (value: string) => {
    this.themeKey = value;
  };

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
