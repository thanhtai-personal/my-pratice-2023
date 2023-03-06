import layoutActionsType from "actionTypes/layout.actionsType";
import { Alignment } from "components/AppLayout/AppMenu";
import { MenuItemType } from "components/AppLayout/AppMenu/MenuItem";
import { makeObservable, observable, action } from "mobx";
import BaseReducer from "./Base.reducer";

class LayoutModel extends BaseReducer {
  //initial data
  @observable protected isGlobalLoading = false as boolean;
  @observable protected useHeader = true as boolean;
  @observable protected useFooter = true as boolean;
  @observable protected menuAlignment = [] as Array<Alignment>;
  @observable protected menus = [] as Array<MenuItemType>;
  @observable protected dividerList = [] as Array<MenuItemType>;

  @action updateGlobalLoading = (loading: boolean) => {
    this.isGlobalLoading = loading;
  };

  @action updateUseHeader = (value: boolean) => {
    this.useHeader = value;
  };

  @action updateUseFooter = (value: boolean) => {
    this.useFooter = value;
  };

  @action updateMenuAlignment = (value: Array<any>) => {
    this.menuAlignment = value;
  };

  @action updateMenus = (value: Array<any>) => {
    this.menus = value;
  };

  @action updateDividerList = (value: Array<any>) => {
    this.dividerList = value;
  };

  constructor(depsContainer: any) {
    super(depsContainer);
    this.makeReducer([
      {
        type: layoutActionsType.UPDATE_GLOBAL_LOADING,
        handler: (data: boolean) => {
          this.updateGlobalLoading(data);
        },
      },
      {
        type: layoutActionsType.OPEN_OR_CLOSE_HEADER,
        handler: (data: boolean) => {
          this.updateUseHeader(data);
        },
      },
      {
        type: layoutActionsType.OPEN_OR_CLOSE_FOOTER,
        handler: (data: boolean) => {
          this.updateUseFooter(data);
        },
      },
      {
        type: layoutActionsType.UPDATE_ACTIVE_ALIGNMENT_MENU,
        handler: (data: Array<Alignment>) => {
          this.updateMenuAlignment(data);
        },
      },
      {
        type: layoutActionsType.UPDATE_APP_MENU,
        handler: (data: {
          dividerList?: Array<MenuItemType>;
          menus?: Array<MenuItemType>;
        }) => {
          this.updateDividerList(data.dividerList);
          this.updateMenus(data.menus);
        },
      },
    ]);
    makeObservable(this);
  }
}

export default LayoutModel;
