import LayoutDataReducer from "./Layout.reducer";
import HeaderReducer from "./Header.reducer";
import FooterReducer from "./Footer.reducer";
import AppMenuReducer from "./AppMenu.reducer";
import ThemeReducer from "./Theme.reducer";
import AuthReducer from "./Auth.reducer";
import LocalizeReducer from "./Localize.reducer";
import LoginReducer from "./Login.reducer";

class DepsContainer {
  public appLayout: LayoutDataReducer;
  public header: HeaderReducer;
  public footer: FooterReducer;
  public appMenu: AppMenuReducer;
  public themeData: ThemeReducer;
  public auth: AuthReducer;
  public localize: LocalizeReducer;
  public login: LoginReducer;

  public constructor() {
    // Stores
    this.appLayout = new LayoutDataReducer(this);
    this.header = new HeaderReducer(this);
    this.footer = new FooterReducer(this);
    this.appMenu = new AppMenuReducer(this);
    this.themeData = new ThemeReducer(this);
    this.auth = new AuthReducer(this);
    this.localize = new LocalizeReducer(this);
    this.login = new LoginReducer(this);
  }
}

export default DepsContainer;
