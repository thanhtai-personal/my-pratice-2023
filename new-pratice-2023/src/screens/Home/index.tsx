import { observer } from "mobx-react";
import Flex from "components/common/Flex";

const HomeComponent = () => {
  return <Flex center width={"100vw"} height={"100vh"}></Flex>;
};

export default observer(HomeComponent);
