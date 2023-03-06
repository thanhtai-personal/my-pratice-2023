import { observer } from "mobx-react";
import Flex from "components/common/Flex";
import Text from "components/common/Text";

const DashboardPage = () => {
  return (
    <Flex center width={"100vw"} height={"100vh"}>
      <Text className="text">dash board page</Text>
    </Flex>
  );
};

export default observer(DashboardPage);
