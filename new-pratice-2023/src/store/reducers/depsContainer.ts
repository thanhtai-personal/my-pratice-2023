import LayoutDataModel from "./Layout.reducer";
import HeaderModel from "./Header.reducer";
import FooterModel from "./Footer.reducer";
import AppMenuModel from "./AppMenu.reducer";
import ThemeModel from "./Theme.reducer";

class DepsContainer {
  public layout: LayoutDataModel;
  public header: HeaderModel;
  public footer: FooterModel;
  public appMenu: AppMenuModel;
  public themeData: ThemeModel;

  public constructor() {
    // Stores
    this.layout = new LayoutDataModel(this);
    this.header = new HeaderModel(this);
    this.footer = new FooterModel(this);
    this.appMenu = new AppMenuModel(this);
    this.themeData = new ThemeModel(this);
  }
}

export default DepsContainer;
