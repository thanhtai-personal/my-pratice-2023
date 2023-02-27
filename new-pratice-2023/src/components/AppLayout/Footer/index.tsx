import Flex from "components/common/Flex";
import useDepsContainer from "hooks/useDepsContainer";
import { observer } from "mobx-react";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  const { footer } = useDepsContainer();

  return <Flex></Flex>;
};

export default observer(Footer);
