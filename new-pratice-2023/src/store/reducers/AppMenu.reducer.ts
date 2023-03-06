import LayoutActionsType from "actionTypes/layout.actionsType";
import { action, makeObservable, observable } from "mobx";
import BaseReducer from "./Base.reducer";

class AppMenu extends BaseReducer {
  //initial data
  @observable protected isMenuOpen = false as boolean;

  @action updateIsMenuOpen = (value: boolean) => {
    this.isMenuOpen = value;
  };

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([
      {
        type: LayoutActionsType.TOGGLE_APP_MENU,
        handler: (data: boolean) => {
          this.updateIsMenuOpen(data);
        },
      },
    ]);
    makeObservable(this);
  }
}

export default AppMenu;
