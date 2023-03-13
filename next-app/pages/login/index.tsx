import { toggleHeader } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import MuiForm from "src/components/common/Form";
import useLocalize from "src/hooks/useLocalize";
import { useCallback, useEffect } from "react";
import { useGlobalStyle } from "src/styles";
import { useLoginStyles } from "./styles";
import LoginModel from "./model.login";
import useSelector from "src/hooks/useSelector";

interface LoginProps {}

const Login = (props: LoginProps) => {
  const classes = useLoginStyles();
  const globalClasses = useGlobalStyle();
  const localizeState = useSelector((state) => state.localize);
  const { t, i18n } = useLocalize(localizeState.key);

  useEffect(() => {
    toggleHeader(false);
    return () => {
      toggleHeader(true);
    };
  }, []);

  const handleLogin = useCallback(() => {}, []);

  return (
    <Flex width={"100%"} height={"100%"} center>
      <Flex className={globalClasses.box} minWidth={400} column>
        <Flex className="box-title">
          <Text className={globalClasses.textTitle}>{t("LOGIN")}</Text>
        </Flex>
        <MuiForm model={LoginModel} onSubmit={handleLogin} />
      </Flex>
    </Flex>
  );
};

export default Login;
