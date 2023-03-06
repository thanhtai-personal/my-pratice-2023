import Flex from "components/common/Flex";
import Text from "components/common/Text";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

const UnauthorizePage = (props: any) => {
  const { t } = useTranslation();

  return (
    <Flex width={"100%"} height={"100%"} center column>
      <Text className="text">
        {t(`You need permission to join this page.`)}
      </Text>
      <Text className="link-text">{t(`Click here to login.`)}</Text>
    </Flex>
  );
};

export default observer(UnauthorizePage);
