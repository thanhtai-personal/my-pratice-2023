import { toggleHeader } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import MuiForm from "src/components/common/Form";
import useLocalize from "src/hooks/useLocalize";
import { useCallback, useEffect } from "react";
import { useGlobalStyle } from "src/styles";
import { useDetailProductStyles } from "./styles";
import DetailProductModel from "./model.detailProduct";
import useSelector from "src/hooks/useSelector";

interface DetailProductProps {}

const DetailProduct = (props: DetailProductProps) => {
  const classes = useDetailProductStyles();
  const globalClasses = useGlobalStyle();
  const localizeState = useSelector((state) => state.localize);
  const { t, i18n } = useLocalize(localizeState.key);

  const handleDetailProduct = useCallback(() => {}, []);

  return (
    <Flex width={"100%"} height={"100%"} center>
      <Flex className={globalClasses.box} minWidth={400} column>
        <Flex className="box-title">
          <Text className={globalClasses.textTitle}>{t("Detail product")}</Text>
        </Flex>
        <MuiForm
          model={DetailProductModel}
          viewMode
          onSubmit={handleDetailProduct}
        />
      </Flex>
    </Flex>
  );
};

export default DetailProduct;
