import LayoutDataModel from "./Layout";
import HeaderModel from "./Header";
import FooterModel from "./Footer";
import AppMenuModel from "./AppMenu";

class DepsContainer {
  public layout: LayoutDataModel;
  public header: HeaderModel;
  public footer: FooterModel;
  public appMenu: AppMenuModel;

  public constructor() {
    // Stores
    this.layout = new LayoutDataModel(this);
    this.header = new HeaderModel(this);
    this.footer = new FooterModel(this);
    this.appMenu = new AppMenuModel(this);
  }
}

export default DepsContainer;
