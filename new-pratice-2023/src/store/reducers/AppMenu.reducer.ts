import LayoutActionsType from "actionTypes/layout.actionsType";
import { Alignment } from "components/AppLayout/AppMenu";
import { makeObservable, observable } from "mobx";
import BaseReducer from "./Base.reducer";

class AppMenu extends BaseReducer {
  //initial data
  @observable protected isLoading = false as boolean;
  @observable protected activeAlignment = "" as Alignment | "";

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([
      {
        type: LayoutActionsType.TOGGLE_ALIGNMENT,
        handler: (data: { alignment: Alignment; isOpen: boolean }) => {
          if (data.isOpen) {
            this.activeAlignment = data.alignment;
          } else {
            this.activeAlignment = "";
          }
        },
      },
    ]);
    makeObservable(this);
  }
}

export default AppMenu;
