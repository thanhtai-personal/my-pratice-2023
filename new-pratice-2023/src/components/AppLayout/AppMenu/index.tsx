import Flex from "components/common/Flex";
import useDepsContainer from "hooks/useDepsContainer";
import { observer } from "mobx-react";

interface AppMenuProps {}

const AppMenu = (props: AppMenuProps) => {
  const { appMenu } = useDepsContainer();

  return <Flex></Flex>;
};

export default observer(AppMenu);
