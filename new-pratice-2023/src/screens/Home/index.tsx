import { observer } from "mobx-react";
import Flex from "components/common/Flex";
import { useEffect } from "react";
import { updateGlobalLoading } from "actions/layout.actions";

const HomeComponent = () => {
  useEffect(() => {
    updateGlobalLoading(true);
  }, []);

  return (
    <Flex center width={"100vw"} height={"100vh"}>
      this is home page
    </Flex>
  );
};

export default observer(HomeComponent);
