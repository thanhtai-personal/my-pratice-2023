import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { updateActiveAlimentMenu } from "actions/layout.actions";
import { AlignmentType } from "../AppMenu";

interface AppToolbarProps {
  children?: any;
}

const AppToolbar = (props: AppToolbarProps) => {
  const {} = props;

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
      {props.children && props.children}
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

export default AppToolbar;
