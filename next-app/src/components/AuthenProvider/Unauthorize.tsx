import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const UnauthorizePage = (props: any) => {
  const { t } = useTranslation();

  return (
    <Flex width={"100%"} height={"100%"} center column>
      <Text className="text">
        {t(`You need permission to join this page.`)}
      </Text>
      <Link href={"/login"}>
        <Text className="link-text">{t(`Click here to login.`)}</Text>
      </Link>
    </Flex>
  );
};

export default UnauthorizePage;
