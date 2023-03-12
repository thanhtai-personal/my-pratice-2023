import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const listStyle = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  })
);

export const menuItemStyle = makeStyles((theme: Theme) =>
  createStyles({
    itemActive: {
      background: "black",
      color: "white",
      pointerEvents: "none",
      width: "100%",
    },
    item: {
      width: "100%",
    },
  })
);

export const subMenusStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);
