import { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import AppBar from "@material-ui/core/AppBar";
import AppToolbar from "./AppToolbar";
import { updateActiveAlimentMenu } from "actions/layout.actions";
import useDepsContainer from "hooks/useDepsContainer";
import { AlignmentType } from "../AppMenu";

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
  const classes = useStyles();
  const { appMenu } = useDepsContainer();
  const { accountMenuId = ACCOUNT_MENU_ID, mobileMenuId = MOBILE_MENU_ID } =
    props;

  useEffect(() => {
    updateActiveAlimentMenu([AlignmentType.left]);
    return () => {
      updateActiveAlimentMenu([]);
    };
  }, []);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <AppToolbar accountMenuId={accountMenuId} mobileMenuId={mobileMenuId} />
      </AppBar>
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
