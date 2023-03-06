import Flex from "components/common/Flex";
import useDepsContainer from "hooks/useDepsContainer";
import { observer } from "mobx-react";
import Header from "./Header";
import AppMenu from "./AppMenu";
import Footer from "./Footer";
import { appStyles } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout = (props: LayoutProps) => {
  const { appLayout } = useDepsContainer();
  const classes = appStyles(props);

  return (
    <Flex width={"100vw"} height="100vh" column className={classes.appRoot}>
      {appLayout.useHeader && <Header />}
      <AppMenu menus={appLayout.menus} dividerList={appLayout.dividerList} />
      {props.children}
      {appLayout.useFooter && <Footer />}
    </Flex>
  );
};

export default observer(AppLayout);
