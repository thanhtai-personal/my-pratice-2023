import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import AppBar from "@material-ui/core/AppBar";
import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";
import AppToolbar from "./AppToolbar";

interface HeaderProps {}

const accountMenuId = "primary-search-account-menu";
const mobileMenuId = "primary-search-account-menu-mobile";

const Header = (props: HeaderProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <AppToolbar
          accountMenuId={accountMenuId}
          mobileMenuId={mobileMenuId}
          handleProfileMenuOpen={handleProfileMenuOpen}
          handleMobileMenuOpen={handleMobileMenuOpen}
        />
      </AppBar>
      <MobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      <AccountMenu
        anchorEl={anchorEl}
        menuId={accountMenuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    grow: {
      width: "100vw",
      position: "sticky",
    },
  });
});

export default observer(Header);
