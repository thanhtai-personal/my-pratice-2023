import { useEffect } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";

import useAdminMenus from "src/hooks/useAdminMenus";

const CategoriesPage = (props) => {
  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["categories", "list-categories"]);
    return () => setActiveMenu([]);
  }, []);

  return <Flex>category page</Flex>;
};

export default CategoriesPage;
