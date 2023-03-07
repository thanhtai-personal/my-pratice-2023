import { Button } from "@material-ui/core";
import Flex from "components/common/Flex";
import Text from "components/common/Text";
import useLocalize from "hooks/useLocalize";
import { useGlobalStyle } from "styles";

const ButtonField = (props: any) => {
  const { action, label } = props;
  const { t } = useLocalize();
  const globalClasses = useGlobalStyle();

  const handleClick = (e: any) => {
    action && action({ event: e });
  };

  return (
    <Flex column m={1}>
      <Button
        className={globalClasses.buttonSubmit}
        variant="contained"
        onClick={handleClick}
      >
        <Text className={globalClasses.buttonText}>{t(label)}</Text>
      </Button>
    </Flex>
  );
};

export default ButtonField;
