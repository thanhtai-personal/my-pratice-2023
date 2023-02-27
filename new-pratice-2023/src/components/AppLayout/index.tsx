import Flex from "components/common/Flex";
import useDepsContainer from "hooks/useDepsContainer";
import { observer } from "mobx-react";
import Header from "./Header";
import AppMenu from "./AppMenu";
import Footer from "./Footer";
import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout = (props: LayoutProps) => {
  const { layout } = useDepsContainer();

  const classes = useStyles(props);

  return (
    <Flex width={"100vw"} height="100vh" className={classes.appRoot} column>
      {layout.useHeader && <Header />}
      {layout.isOpenAppMenu && <AppMenu />}
      {props.children}
      {layout.useFooter && <Footer />}
    </Flex>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appRoot: {
      overflowX: "hidden",
      overflowY: "auto",
      position: "relative",
      "&::-webkit-scrollbar": {
        width: "2px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "steelblue",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "green",
      },
    },
  })
);

export default observer(AppLayout);
