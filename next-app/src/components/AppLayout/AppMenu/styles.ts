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
