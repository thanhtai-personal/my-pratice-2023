import { useEffect } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";

import useAdminMenus from "src/hooks/useAdminMenus";

const ImagesPage = (props) => {
  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["images"]);
    return () => setActiveMenu([]);
  }, []);

  return <Flex>Images page</Flex>;
};

export default ImagesPage;
