export type LayoutState = {
  isGlobalLoading: boolean;
  useHeader: boolean;
  useFooter: boolean;
  menuAlignment: Array<string>;
  menus: Array<any>;
  dividerList: Array<any>;
};

export default {
  isGlobalLoading: false,
  useHeader: true,
  useFooter: true,
  menuAlignment: [],
  menus: [],
  dividerList: [],
};
