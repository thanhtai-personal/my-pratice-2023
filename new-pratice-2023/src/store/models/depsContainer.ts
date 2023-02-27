import LayoutDataModel from "./Layout";
import HeaderModel from "./Header";
import FooterModel from "./Footer";
import AppMenuModel from "./AppMenu";
import ThemeModel from "./Theme";

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
