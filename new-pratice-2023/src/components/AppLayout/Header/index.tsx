import { observer } from "mobx-react";
import AppBar from "@material-ui/core/AppBar";
import AppToolbar from "./AppToolbar";
import useDepsContainer from "hooks/useDepsContainer";
import { headerStyles } from "./styles";

interface HeaderProps {
  accountMenuId?: string;
  mobileMenuId?: string;
}

const ACCOUNT_MENU_ID = `${Math.round(
  Math.random() * 100000
)}-primary-search-account-menu`;
const MOBILE_MENU_ID = `${Math.round(
  Math.random() * 100000
)}-primary-search-account-menu-mobile`;

const Header = (props: HeaderProps) => {
  const classes = headerStyles();
  const { appMenu } = useDepsContainer();
  const { accountMenuId = ACCOUNT_MENU_ID, mobileMenuId = MOBILE_MENU_ID } =
    props;

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <AppToolbar>{/* add header items here */}</AppToolbar>
      </AppBar>
    </div>
  );
};

export default observer(Header);
