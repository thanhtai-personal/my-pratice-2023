import { observer } from "mobx-react";
import Flex from "components/common/Flex";
import { useCallback, useEffect } from "react";
import { updateGlobalLoading } from "actions/layout.actions";
import useDepsContainer from "hooks/useDepsContainer";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import i18n, { LangKeys } from "locales/i18n";

const HomeComponent = () => {
  const { layout } = useDepsContainer();
  const location = useLocation();

  const { t } = useTranslation();
  const cachedT = useCallback((key: string) => t(key), [t]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("lang") === LangKeys.vi) {
      i18n.changeLanguage(LangKeys.vi);
    } else {
      i18n.changeLanguage(LangKeys.en);
    }
  }, [location.search]);

  useEffect(() => {}, []);

  return <Flex center width={"100vw"} height={"100vh"}></Flex>;
};

export default observer(HomeComponent);
