import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchBox from "components/common/SearchBox";
import Flex from "components/common/Flex";
import { observer } from "mobx-react";
import useDepsContainer from "hooks/useDepsContainer";
import { updateActiveAlimentMenu } from "actions/layout.actions";
import { AlignmentType } from "../AppMenu";

interface AppToolbarProps {
  accountMenuId?: string;
  mobileMenuId?: string;
  handleMobileMenuOpen?: any;
  handleProfileMenuOpen?: any;
}

const AppToolbar = (props: AppToolbarProps) => {
  const { header } = useDepsContainer();

  const {
    accountMenuId,
    mobileMenuId,
    handleMobileMenuOpen,
    handleProfileMenuOpen,
  } = props;

  const classes = useStyles();

  const handleOpenDrawer = () => {
    updateActiveAlimentMenu([AlignmentType.left]);
  };

  return (
    <Toolbar>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={handleOpenDrawer}
      >
        <MenuIcon />
      </IconButton>
      {header.useSearchBox && (
        <Flex mx={2}>
          <SearchBox placeholder="Search..." />
        </Flex>
      )}
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        {header.useMailbox && (
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
        )}
        {header.useNotification && (
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        )}
        {header.useAccountMenu && (
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={accountMenuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        )}
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      width: "100vw",
      position: "sticky",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

export default observer(AppToolbar);
