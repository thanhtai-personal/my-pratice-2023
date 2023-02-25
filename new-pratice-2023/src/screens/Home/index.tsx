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

  const { t } = useTranslation();
  const cachedT = useCallback((key: string) => t(key), [t]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("lang") === LangKeys.vi) {
      i18n.changeLanguage(LangKeys.vi);
    } else {
      i18n.changeLanguage(LangKeys.en);
    }
  }, [location.search]);

  useEffect(() => {
    updateGlobalLoading(true);
    setTimeout(() => {
      updateGlobalLoading(false);
    }, 2000);
  }, []);

  return (
    <Flex center width={"100vw"} height={"100vh"}>
      {layout.isGlobalLoading
        ? cachedT("Loading")
        : cachedT("this is home page")}
    </Flex>
  );
};

export default observer(HomeComponent);
