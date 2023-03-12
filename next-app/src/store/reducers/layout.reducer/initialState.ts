export type LayoutState = {
  isGlobalLoading: boolean;
  useHeader: boolean;
  useFooter: boolean;
  menuAlignment: Array<string>;
  menus: Array<any>;
  dividerList: Array<any>;
  activeMenus: Array<string>;
};

const state = {
  isGlobalLoading: false,
  useHeader: true,
  useFooter: true,
  menuAlignment: [],
  menus: [],
  dividerList: [],
  activeMenus: [],
};

export default state;
