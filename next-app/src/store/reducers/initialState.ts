import appMenuState from "./appMenu.reducer/initialState";
import authState from "./auth.reducer/initialState";
import footerState from "./footer.reducer/initialState";
import headerState from "./header.reducer/initialState";
import layoutState from "./layout.reducer/initialState";
import localizeState from "./localize.reducer/initialState";
import loginState from "./login.reducer/initialState";
import themeState from "./theme.reducer/initialState";
import signupState from "./signup.reducer/initialState";
import categoryState from "./category.reducer/initialState";
import productState from "./product.reducer/initialState";
import orderState from "./order.reducer/initialState";
import userState from "./user.reducer/initialState";
import roleState from "./role.reducer/initialState";

const defaultState = {
  appMenu: appMenuState,
  categories: categoryState,
  auth: authState,
  footer: footerState,
  header: headerState,
  layout: layoutState,
  localize: localizeState,
  login: loginState,
  signup: signupState,
  theme: themeState,
  products: productState,
  users: userState,
  orders: orderState,
  roles: roleState,
};

export default defaultState;
