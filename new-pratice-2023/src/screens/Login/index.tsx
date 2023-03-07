import { toggleHeader } from "actions/layout.actions";
import Flex from "components/common/Flex";
import Text from "components/common/Text";
import MuiForm from "components/common/Form";
import useDepsContainer from "hooks/useDepsContainer";
import useLocalize from "hooks/useLocalize";
import { observer } from "mobx-react";
import { useCallback, useLayoutEffect } from "react";
import { useGlobalStyle } from "styles";
import { useLoginStyles } from "./styles";
import LoginModel from "./model.login";

interface LoginProps {}

const Login = (props: LoginProps) => {
  const classes = useLoginStyles();
  const globalClasses = useGlobalStyle();
  const { localize } = useDepsContainer();
  const { t, i18n } = useLocalize(localize.key);

  useLayoutEffect(() => {
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

export default observer(Login);
