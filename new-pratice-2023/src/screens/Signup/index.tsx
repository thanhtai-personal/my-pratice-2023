import Flex from "components/common/Flex";
import { observer } from "mobx-react";
import { useGlobalStyle } from "styles";
import { useSignupStyles } from "./styles";

interface SignupProps {}

const Signup = (props: SignupProps) => {
  const classes = useSignupStyles();
  const globalClasses = useGlobalStyle();

  return (
    <Flex width={"100%"} height={"100%"} center>
      <Flex className={globalClasses.box}></Flex>
    </Flex>
  );
};

export default observer(Signup);
