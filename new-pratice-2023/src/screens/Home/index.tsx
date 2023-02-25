import { observer } from "mobx-react";
import Flex from "components/common/Flex";
import { useEffect } from "react";
import { updateGlobalLoading } from "actions/layout.actions";
import useDepsContainer from "hooks/useDepsContainer";

const HomeComponent = () => {
  const { layout } = useDepsContainer();

  useEffect(() => {
    updateGlobalLoading(true);
    setTimeout(() => {
      updateGlobalLoading(false);
    }, 2000);
  }, []);

  return (
    <Flex center width={"100vw"} height={"100vh"}>
      {layout.isGlobalLoading ? "Loading" : "this is home page"}
    </Flex>
  );
};

export default observer(HomeComponent);
