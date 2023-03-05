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
  const [alignment, setAlignmentEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAlignmentEl, setMobileMoreAlignmentEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(alignment);
  const isMobileMenuOpen = Boolean(mobileMoreAlignmentEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAlignmentEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAlignmentEl(null);
  };

  const handleMenuClose = () => {
    setAlignmentEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAlignmentEl(event.currentTarget);
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
        mobileMoreAlignmentEl={mobileMoreAlignmentEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      <AccountMenu
        alignment={alignment}
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
