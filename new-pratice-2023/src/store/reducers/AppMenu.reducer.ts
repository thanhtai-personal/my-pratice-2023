import LayoutActionsType from "actionTypes/layout.actionsType";
import { Anchor, AnchorType } from "components/AppLayout/AppMenu";
import { makeObservable, observable } from "mobx";
import BaseReducer from "./Base.reducer";

class AppMenu extends BaseReducer {
  //initial data
  @observable protected isLoading = false as boolean;
  @observable protected activeAnchor = AnchorType.left as Anchor | "";

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([
      {
        type: LayoutActionsType.TOGGLE_ANCHOR,
        handler: (data: { anchor: Anchor; isOpen: boolean }) => {
          if (data.isOpen) {
            this.activeAnchor = data.anchor;
          } else {
            this.activeAnchor = "";
          }
        },
      },
    ]);
    makeObservable(this);
  }
}

export default AppMenu;
