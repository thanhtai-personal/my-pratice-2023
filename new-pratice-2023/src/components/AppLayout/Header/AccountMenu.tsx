import { Menu, MenuItem } from "@material-ui/core";
import { observer } from "mobx-react";

interface AccountMenuProps {
  anchorEl: any;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: any;
}

const AccountMenu = (props: AccountMenuProps) => {
  const { anchorEl, menuId, isMenuOpen, handleMenuClose } = props;

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

export default observer(AccountMenu);
